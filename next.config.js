/** @type {import('next').NextConfig} */
const { BASE_API_URL } = process.env;

module.exports = {
  env: {
    BASE_API_URL
  },
  images: {
    domains: ['randomuser.me']
  },
  reactStrictMode: true
};
