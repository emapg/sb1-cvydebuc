import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { SslCertificate } from '../../types';
import { isValidDomain } from '../../utils/validators';
import { mockSslCheck } from '../../utils/mockData';

export function SslChecker() {
  const [domain, setDomain] = useState('');
  const [certificate, setCertificate] = useState<SslCertificate | null>(null);
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
      const result = await mockSslCheck(domain);
      setCertificate(result);
    } catch (err) {
      setError('Failed to check SSL certificate');
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
            <Shield className="h-5 w-5" />
            Check SSL
          </button>
        </div>
        {error && <p className="mt-2 text-red-600">{error}</p>}
      </form>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : certificate ? (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">SSL Certificate Information</h3>
          <dl className="grid grid-cols-1 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Issuer</dt>
              <dd className="mt-1 text-sm text-gray-900">{certificate.issuer}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Subject</dt>
              <dd className="mt-1 text-sm text-gray-900">{certificate.subject}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Valid From</dt>
              <dd className="mt-1 text-sm text-gray-900">{new Date(certificate.validFrom).toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Valid To</dt>
              <dd className="mt-1 text-sm text-gray-900">{new Date(certificate.validTo).toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Serial Number</dt>
              <dd className="mt-1 text-sm text-gray-900">{certificate.serialNumber}</dd>
            </div>
          </dl>
        </div>
      ) : null}
    </div>
  );
}