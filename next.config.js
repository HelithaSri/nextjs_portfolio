/** @type {import('next').NextConfig} */

const isProd = true;

const nextConfig = {
    // comment on these lines before running locally
    // output: 'export',
    // basePath: '/_next',
    assetPrefix: isProd ? '/nextjs_portfolio/' : '',

}

module.exports = nextConfig
