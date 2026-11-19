/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // react-cookie-consent 10.0.2 の配布物は class static block（ES2022）を含むため、
  // 古いブラウザでも動くように Next.js で変換する
  transpilePackages: ['react-cookie-consent'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jibungoto-planet-images.s3.ap-northeast-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
