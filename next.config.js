/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

/* we need to athorize the use of the images here. When it doesn't work, stop, and then run it again */
module.exports = {
  images: {
    domains: ['press.hulu.com','image.tmdb.org'],
  },
}
