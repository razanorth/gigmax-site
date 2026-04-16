import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.resolve(__dirname),
  async rewrites() {
    return [
      { source: '/pitch/buildouts', destination: '/pitch/buildouts/index.html' },
      { source: '/pitch/buildouts/', destination: '/pitch/buildouts/index.html' },
      { source: '/pitch/zencastr', destination: '/pitch/zencastr/index.html' },
      { source: '/pitch/zencastr/', destination: '/pitch/zencastr/index.html' },
    ];
  },
};

export default nextConfig;
