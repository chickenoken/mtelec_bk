/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  eslint: { 
      ignoreDuringBuilds: true, 
  }, 
  experimental: {
    serverComponentsExternalPackages: ['oslo'],
  },
  webpack: (config) => {
    config.externals.push('@node-rs/argon2', '@node-rs/bcrypt');
    return config;
  },
};

export default nextConfig;