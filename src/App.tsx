import React from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Tool } from './components/Tool';
import { Globe, Lock, Wifi, Server, Database, Code } from 'lucide-react';

function App() {
  const tools = [
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "DNS Lookup",
      description: "Check DNS records and verify domain configurations"
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-600" />,
      title: "SSL Checker",
      description: "Verify SSL certificates and security settings"
    },
    {
      icon: <Wifi className="h-6 w-6 text-blue-600" />,
      title: "Ping Test",
      description: "Test connectivity and response times"
    },
    {
      icon: <Server className="h-6 w-6 text-blue-600" />,
      title: "WHOIS Lookup",
      description: "Get detailed domain registration information"
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "Port Scanner",
      description: "Check open ports and services"
    },
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: "HTTP Headers",
      description: "Analyze HTTP response headers"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
              All-in-One Domain & Network Tools
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              Comprehensive suite of network diagnostic and domain analysis tools to help you monitor and troubleshoot your online presence.
            </p>
            <SearchBar />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Available Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Tool key={index} {...tool} />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Why Choose Our Tools?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Fast & Reliable</h3>
                <p className="text-gray-600">Get instant results with our high-performance tools</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Secure</h3>
                <p className="text-gray-600">Your data is always protected and private</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Professional</h3>
                <p className="text-gray-600">Enterprise-grade tools for all users</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>DNS Lookup</li>
                <li>SSL Checker</li>
                <li>WHOIS Lookup</li>
                <li>Port Scanner</li>
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
    </div>
  );
}

export default App;