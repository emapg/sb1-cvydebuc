import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { WhoisInfo } from '../../types';
import { isValidDomain } from '../../utils/validators';
import { mockWhoisLookup } from '../../utils/mockData';

export function WhoisLookup() {
  const [domain, setDomain] = useState('');
  const [info, setInfo] = useState<WhoisInfo | null>(null);
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
      const result = await mockWhoisLookup(domain);
      setInfo(result);
    } catch (err) {
      setError('Failed to perform WHOIS lookup');
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
      ) : info ? (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">WHOIS Information</h3>
          <dl className="grid grid-cols-1 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Domain Name</dt>
              <dd className="mt-1 text-sm text-gray-900">{info.domainName}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Registrar</dt>
              <dd className="mt-1 text-sm text-gray-900">{info.registrar}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Registration Date</dt>
              <dd className="mt-1 text-sm text-gray-900">{info.registeredOn}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Expiration Date</dt>
              <dd className="mt-1 text-sm text-gray-900">{info.expiresOn}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {info.status.map((status, index) => (
                  <span key={index} className="inline-block bg-gray-100 rounded px-2 py-1 text-xs mr-2 mb-2">
                    {status}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Nameservers</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {info.nameservers.map((ns, index) => (
                  <div key={index}>{ns}</div>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      ) : null}
    </div>
  );
}