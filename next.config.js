/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/image/C4D03AQHhSsaebWFyig/profile-displayphoto-shrink_200_200/0/1622314022456?e=1709164800&v=beta&t=sFYB53cVl9evEetPIjttdOpgheePWNQrP7uGhVn0lUA'
      }
    ]
  }
}