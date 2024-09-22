/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**', // يمكنك تخصيص هذا إذا كنت تحتاج إلى مسار محدد
            },
        ],
    },
};

export default nextConfig;
