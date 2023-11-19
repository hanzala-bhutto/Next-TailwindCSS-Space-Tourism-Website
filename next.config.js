/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: false,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
