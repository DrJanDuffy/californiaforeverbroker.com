/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://*.realscout.com",
              "img-src 'self' data: https: blob:",
              "style-src 'self' 'unsafe-inline'",
              "frame-src 'self' https://www.google.com https://maps.google.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
