import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/CardComponent/", // ¡Con las barras!
  build: {
    outDir: "docs", // Opcional: GitHub Pages puede usar la carpeta 'docs'
  },
});
