// next.config.mjs
import dotenv from 'dotenv';

// Configure dotenv
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'user-images.githubusercontent.com',
      'images.pexels.com',
      'www.simplilearn.com',
      'images.spiceworks.com',
      'media.licdn.com'
    ],
  },
  
};

export default nextConfig;
