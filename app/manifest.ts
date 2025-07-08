import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yesp Tech - Web Development Company Erode",
    short_name: "Yesp Tech",
    description: "Leading web development and eCommerce company in Erode offering custom solutions",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/yesp-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/yesp-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
