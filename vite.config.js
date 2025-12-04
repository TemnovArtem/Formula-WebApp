import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    istanbul({
      include: ["src/**/*.js", "src/**/*.jsx"],
      exclude: ["node_modules", "cypress", "**/*.spec.js", "**/*.test.js"],
      extension: [".js", ".jsx"],
      requireEnv: false, // Інструментування завжди увімкнено
      cypress: true, // Спеціальна підтримка для Cypress
    }),
  ],
  server: {
    port: 5173,
  },
}));
