/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Next génère /out au build
  images: { unoptimized: true },
  trailingSlash: false,
};
export default nextConfig;
