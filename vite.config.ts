import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
const pwaOptions: Partial<VitePWAOptions> = {
  mode: "production",
  base: "/",
  includeAssets: ["favicon.svg"],
  registerType: "autoUpdate",
  workbox: {
    clientsClaim: false,
    skipWaiting: true,
    disableDevLogs: true,
    maximumFileSizeToCacheInBytes: 6000000,
  },
  manifest: {
    name: "WhatsApp",
    short_name: "WhatsApp",
    theme_color: "#ffffff",
    icons: [
      {
        src: "assets/images/icon-192.png", // <== don't add slash, for testing
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "assets/images/icon-512.png", // <== don't add slash, for testing
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },

  devOptions: {
    enabled: false,
    type: "module",
    navigateFallback: "index.html",
  },
};
const timestamp = new Date().getTime();

export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA(pwaOptions)],
  build: {
    minify: "esbuild",
    emptyOutDir: true,
    outDir: "dist",
    sourcemap: false,
    cssCodeSplit: true,
    modulePreload: true,
    chunkSizeWarningLimit: 1000000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
        chunkFileNames: `assets/js/[hash]-${timestamp}.js`,
        entryFileNames: `assets/js/[hash]-${timestamp}.js`,
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp|avif)$/.test(name ?? "")) {
            // return `assets/images/[hash]-${timestamp}[extname]`;
            return `assets/images/${name}`;
          }
          if (/\.(mp3)$/.test(name ?? "")) {
            return `assets/mp3/${name}`;
          }
          if (/\.(ttf|woff2|svg)$/.test(name ?? "")) {
            // return `assets/font/[hash]-${timestamp}[extname]`;
            return `assets/font/${name}`;
          }
          if (/\.css$/.test(name ?? "")) {
            return `assets/css/[hash]-${timestamp}[extname]`;
          }
          return `assets/${name}`;
        },
      },
    },
  },
});
