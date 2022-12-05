import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "OldNews",
        short_name: "OldNews",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any",
          },
        ],
        // icons: [
        //   {
        //     src: "/ic_launcher.png",
        //     sizes: "192x192",
        //     type: "image/png",
        //     purpose: "any",
        //   },
        //   {
        //     src: "/ic_launcher-web.png",
        //     sizes: "512x512",
        //     type: "image/png",
        //     purpose: "maskable",
        //   },
        // ],
        theme_color: "#fdd32d",
        background_color: "#fdd32d",
        display: "standalone",
      },
    }),
  ],
});
