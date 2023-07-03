/** @type {import('next').NextConfig} */

const isProd = true;

const nextConfig = {
    // comment on these lines before running locally
    output: 'export',
    assetPrefix: isProd ? '/nextjs_portfolio/' : '',
}

module.exports = nextConfig
