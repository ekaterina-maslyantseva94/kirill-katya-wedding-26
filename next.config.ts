import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const githubPagesBasePath = '/kirill-katya-wedding-26';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGitHubPages ? githubPagesBasePath : '',
  assetPrefix: isGitHubPages ? githubPagesBasePath : '',
};

export default nextConfig;
