/** @type {import('next').NextConfig} */
const { BASE_API_URL } = process.env;

module.exports = {
  env: {
    BASE_API_URL
  },
  reactStrictMode: true
};
