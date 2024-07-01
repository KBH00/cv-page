/** @type {import('next').NextConfig} */
// const prefix =
//   process.env.NODE_ENV === 'production' ? 'https://kbh00.github.io/' : ''


const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   */
  output: "export",
  basePath: '/cv-page',
  // assetPrefix: prefix,
  /**
   * Set base path. This is usually the slug of your repository.
   *
   */
  reactStrictMode: true,
  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
