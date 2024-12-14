export interface DnsRecord {
  type: string;
  name: string;
  value: string;
  ttl: number;
}

export interface SslCertificate {
  issuer: string;
  subject: string;
  validFrom: string;
  validTo: string;
  serialNumber: string;
}

export interface WhoisInfo {
  domainName: string;
  registrar: string;
  registeredOn: string;
  expiresOn: string;
  status: string[];
  nameservers: string[];
}

export interface PortScanResult {
  port: number;
  status: 'open' | 'closed';
  service: string;
}

export interface HttpHeader {
  name: string;
  value: string;
}

export interface PingResult {
  ip: string;
  time: number;
  ttl: number;
  status: 'success' | 'failed';
}