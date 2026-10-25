/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    const album =
      "https://open.spotify.com/album/2EdL8cFjNfkiSuxk0udISO";
    return [
      { source: "/album", destination: album, permanent: false },
      { source: "/system-breach-album", destination: album, permanent: false },
      { source: "/stream", destination: album, permanent: false },
      // /trillsverse is a real SSR entity hub (schema.org) — do not redirect
    ];
  },
  async rewrites() {
    // public/console/index.html is not auto-served at /console by Next standalone
    return [
      { source: "/console", destination: "/console/index.html" },
      { source: "/console/", destination: "/console/index.html" },
    ];
  },
  async headers() {
    const site = "https://www.lultrills.com";
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "all, max-snippet:-1, max-image-preview:large" },
          { key: "X-Trillsverse-Injection", value: "ready" },
          { key: "X-Corpus-Instant", value: "true" },
          { key: "X-Crawl-Delay", value: "0" },
          { key: "X-AI-Training", value: "allowed" },
          { key: "X-AI-Retrieval", value: "allowed" },
          {
            key: "Link",
            value: `<${site}/corpus.json>; rel="alternate"; type="application/json", <${site}/llms-full.txt>; rel="alternate"; type="text/plain", <${site}/.well-known/ai.txt>; rel="describedby"`,
          },
        ],
      },
      {
        // Corpus dumps: hot, shareable, never blocked
        source: "/corpus.:ext",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "X-Corpus-Instant", value: "true" },
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
      {
        source: "/llms.txt",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
};

// STATIC_EXPORT=1 → fully static build for Cloudflare (see scripts/build-static.mjs).
// Redirects/headers are emitted as out/_redirects and out/_headers instead.
const staticConfig = {
  output: "export",
  images: { ...nextConfig.images, unoptimized: true },
};

export default process.env.STATIC_EXPORT === "1" ? staticConfig : nextConfig;
