/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'standalone',
	images: {
		domains: ['localhost'],
	},
};

module.exports = nextConfig;
