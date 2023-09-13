import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const root = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
      },
    },
  },
});
