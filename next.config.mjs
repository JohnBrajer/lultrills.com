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

export default nextConfig;
