/** @type {import('next').NextConfig} */
const basePath = "/cvpr2026";
const nextConfig = {
    output: "export",
    basePath: basePath,
    reactStrictMode: true,
    images: { unoptimized: true },
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
};

export default nextConfig;
