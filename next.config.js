/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://airtable.com/appWGMpWfG81Mwqss/',
        permanent: false,
        basePath: false
      }
    ]
  }
}

module.exports = nextConfig
