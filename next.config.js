/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['prod.spline.design'],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    EMAILJS_SERVICE_ID: 'service_71ka0bc',
    EMAILJS_TEMPLATE_ID: 'template_amy0xdr',
    EMAILJS_PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
    CALCOM_LINK: 'gnan-automations/lab-visit-slot',
  },
}

module.exports = nextConfig;
