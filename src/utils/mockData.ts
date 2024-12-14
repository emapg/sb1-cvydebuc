import { DnsRecord, SslCertificate, WhoisInfo, PortScanResult, HttpHeader, PingResult } from '../types';

export const mockDnsLookup = async (domain: string): Promise<DnsRecord[]> => {
  // Simulated DNS lookup
  return [
    { type: 'A', name: domain, value: '192.168.1.1', ttl: 3600 },
    { type: 'MX', name: domain, value: 'mail.' + domain, ttl: 3600 },
    { type: 'TXT', name: domain, value: 'v=spf1 include:_spf.google.com ~all', ttl: 3600 },
  ];
};

export const mockSslCheck = async (domain: string): Promise<SslCertificate> => {
  // Simulated SSL certificate check
  return {
    issuer: 'Let\'s Encrypt Authority X3',
    subject: domain,
    validFrom: new Date().toISOString(),
    validTo: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    serialNumber: '123456789',
  };
};

export const mockWhoisLookup = async (domain: string): Promise<WhoisInfo> => {
  // Simulated WHOIS lookup
  return {
    domainName: domain,
    registrar: 'Example Registrar, LLC',
    registeredOn: '2020-01-01',
    expiresOn: '2024-01-01',
    status: ['clientTransferProhibited'],
    nameservers: ['ns1.example.com', 'ns2.example.com'],
  };
};

export const mockPortScan = async (domain: string): Promise<PortScanResult[]> => {
  // Simulated port scan
  return [
    { port: 80, status: 'open', service: 'HTTP' },
    { port: 443, status: 'open', service: 'HTTPS' },
    { port: 21, status: 'closed', service: 'FTP' },
  ];
};

export const mockHttpHeaders = async (url: string): Promise<HttpHeader[]> => {
  // Simulated HTTP headers check
  return [
    { name: 'Server', value: 'nginx/1.18.0' },
    { name: 'Content-Type', value: 'text/html; charset=UTF-8' },
    { name: 'X-Frame-Options', value: 'SAMEORIGIN' },
  ];
};

export const mockPingTest = async (host: string): Promise<PingResult[]> => {
  // Simulated ping test
  return Array(4).fill(null).map(() => ({
    ip: '192.168.1.1',
    time: Math.random() * 100,
    ttl: 64,
    status: 'success',
  }));
};