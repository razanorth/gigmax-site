/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/pitch/buildouts', destination: '/pitch/buildouts/index.html' },
      { source: '/pitch/buildouts/', destination: '/pitch/buildouts/index.html' },
      { source: '/pitch/zencastr', destination: '/pitch/zencastr/index.html' },
      { source: '/pitch/zencastr/', destination: '/pitch/zencastr/index.html' },
    ]
  },
}

export default nextConfig
