// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    // distDir: 'dist', // Add this line to customize the output directory 
    output: 'export',
  };
  
  export default nextConfig; 
  