import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { PingResult } from '../../types';
import { isValidDomain, isValidIP } from '../../utils/validators';
import { mockPingTest } from '../../utils/mockData';

export function PingTool() {
  const [host, setHost] = useState('');
  const [results, setResults] = useState<PingResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidDomain(host) && !isValidIP(host)) {
      setError('Please enter a valid domain name or IP address');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const pingResults = await mockPingTest(host);
      setResults(pingResults);
    } catch (err) {
      setError('Failed to perform ping test');
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = () => {
    if (results.length === 0) return null;
    
    const times = results.map(r => r.time);
    return {
      min: Math.min(...times).toFixed(2),
      max: Math.max(...times).toFixed(2),
      avg: (times.reduce((a, b) => a + b, 0) / times.length).toFixed(2),
    };
  };

  const stats = calculateStats();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={host}
            onChange={(e) => setHost(e.target.value)}
            placeholder="Enter hostname or IP address"
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Activity className="h-5 w-5" />
            Ping
          </button>
        </div>
        {error && <p className="mt-2 text-red-600">{error}</p>}
      </form>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : results.length > 0 ? (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {results.map((result, index) => (
              <div key={index} className="mb-2">
                <span className={`font-mono ${result.status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {result.status === 'success' ? 
                    `64 bytes from ${result.ip}: icmp_seq=${index + 1} ttl=${result.ttl} time=${result.time.toFixed(2)} ms` :
                    `Request timeout for icmp_seq ${index + 1}`}
                </span>
              </div>
            ))}
          </div>

          {stats && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Ping Statistics</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Minimum</dt>
                  <dd className="mt-1 text-sm text-gray-900">{stats.min} ms</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Average</dt>
                  <dd className="mt-1 text-sm text-gray-900">{stats.avg} ms</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Maximum</dt>
                  <dd className="mt-1 text-sm text-gray-900">{stats.max} ms</dd>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}