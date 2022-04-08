/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        TWITCH_VIDEO: process.env.TWITCH_VIDEO,
        TWITCH_CHAT: process.env.TWITCH_CHAT
    }
}

module.exports = nextConfig