/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['starknet']);


module.exports = withTM({
  reactStrictMode: true,
  webpack5: true,
});
