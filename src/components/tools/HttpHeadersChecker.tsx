import React, { useState } from 'react';
import { FileSearch } from 'lucide-react';
import { HttpHeader } from '../../types';
import { isValidDomain } from '../../utils/validators';
import { mockHttpHeaders } from '../../utils/mockData';

export function HttpHeadersChecker() {
  const [url, setUrl] = useState('');
  const [headers, setHeaders] = useState<HttpHeader[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      setError('Please enter a valid URL starting with http:// or https://');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const results = await mockHttpHeaders(url);
      setHeaders(results);
    } catch (err) {
      setError('Failed to fetch HTTP headers');
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
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL (e.g., https://example.com)"
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <FileSearch className="h-5 w-5" />
            Check Headers
          </button>
        </div>
        {error && <p className="mt-2 text-red-600">{error}</p>}
      </form>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : headers.length > 0 ? (
        <div className="bg-white rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Header</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {headers.map((header, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{header.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{header.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}