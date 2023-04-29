/* eslint-disable require-await */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/vacancies',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
