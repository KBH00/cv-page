/** @type {import('next').NextConfig} */
// const prefix =
//   process.env.NODE_ENV === 'production' ? 'https://kbh00.github.io/' : ''
//love of my life~ 


const nextConfig = {

  output: "export",
  basePath: '/cv-page',

  reactStrictMode: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
