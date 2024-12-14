import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { DnsRecord } from '../../types';
import { isValidDomain } from '../../utils/validators';
import { mockDnsLookup } from '../../utils/mockData';

export function DnsLookup() {
  const [domain, setDomain] = useState('');
  const [records, setRecords] = useState<DnsRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidDomain(domain)) {
      setError('Please enter a valid domain name');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const results = await mockDnsLookup(domain);
      setRecords(results);
    } catch (err) {
      setError('Failed to lookup DNS records');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter domain name (e.g., example.com)"
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Search className="h-5 w-5" />
            Lookup
          </button>
        </div>
        {error && <p className="mt-2 text-red-600">{error}</p>}
      </form>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : records.length > 0 ? (
        <div className="bg-white rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TTL</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {records.map((record, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.value}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.ttl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}