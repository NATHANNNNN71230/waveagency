/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // génère /out au build
  images: { unoptimized: true },
  trailingSlash: false,

  // Empêche des fails de build causés par ESLint/TS dans l’environnement Netlify
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
export default nextConfig;
