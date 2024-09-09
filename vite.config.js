import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [react()],
});
