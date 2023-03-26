/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "avatars.dicebear.com",
      "images.pexels.com",
      "platform-lookaside.fbsbx.com",
      "static.xx.fbcdn.net",
      "www.google.com",
      "scontent.fagr1-4.fna.fbcdn.net",
      "tecdn.b-cdn.net"
    ],
  },
}

module.exports = nextConfig
