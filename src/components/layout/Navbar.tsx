import React from 'react';
import { Globe } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Checker</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Tools</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">API</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a>
          </div>
        </div>
      </div>
    </nav>
  );
}