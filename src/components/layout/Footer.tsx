import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-400 text-sm">
              Comprehensive suite of network diagnostic and domain analysis tools.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text <boltAction type="file" filePath="src/components/layout/Footer.tsx">-gray-400 text-sm">
              <li>DNS Lookup</li>
              <li>SSL Checker</li>
              <li>WHOIS Lookup</li>
              <li>Port Scanner</li>
              <li>HTTP Headers</li>
              <li>Ping Tool</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>API Documentation</li>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Checker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}