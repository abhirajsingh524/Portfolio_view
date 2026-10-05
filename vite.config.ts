import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^three$/, replacement: "three/src/Three.js" },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("three/examples/jsm") || id.includes("three-stdlib")) {
              return "three-loaders";
            }
            if (
              id.includes("three/src/renderers") ||
              id.includes("three/src/extras/PMREMGenerator") ||
              id.includes("three/src/materials/ShaderMaterial")
            ) {
              return "three-renderer";
            }
            if (id.includes("three")) {
              return "three-core";
            }
            if (id.includes("gsap")) {
              return "vendor-gsap";
            }
            if (id.includes("react-icons")) {
              return "vendor-icons";
            }
            if (
              id.includes("react-dom") ||
              id.includes("react/") ||
              id.includes("scheduler")
            ) {
              return "vendor-react";
            }
          }
        },
      },
    },
  },
  css: {
    postcss: {},
  },
});
