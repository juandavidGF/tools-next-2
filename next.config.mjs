/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Feel free to modify/remove this option
  webpack: (config) => {
      config.resolve.alias = {
          ...config.resolve.alias,
          "sharp$": false,
          "onnxruntime-node$": false,
      }
      return config;
  },
}

export default nextConfig;