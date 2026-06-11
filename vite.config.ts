import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173,
    watch: {
      ignored: ["**/public/assets/*.mp4", "**/public/assets/*.MOV"],
    },
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
  },
});
