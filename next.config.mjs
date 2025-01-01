// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// next.config.js
export default {
  output: 'export', // Enables static exporting
  basePath: '/ci_cd_test', // Replace with your repository name

  swcMinify: true, // Use SWC for minification
  experimental: {
    fonts: true, // Enable SWC's font handling
  },
};
