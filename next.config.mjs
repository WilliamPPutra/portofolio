/** @type {import('next').NextConfig} */

// GitHub Pages serves a project repo from https://<user>.github.io/<repo>/,
// so we need basePath/assetPrefix set to "/<repo>". The deploy workflow injects
// NEXT_PUBLIC_BASE_PATH automatically; locally it's empty (served from root).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // static HTML export for GitHub Pages
  images: { unoptimized: true }, // no image optimization server on Pages
  trailingSlash: true, // emit /about/index.html so sub-routes work on Pages
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
