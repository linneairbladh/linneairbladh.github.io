import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdPlugin, { Mode } from "vite-plugin-markdown";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdPlugin({ mode: [Mode.REACT] })],

  envDir: "./env/",
});
