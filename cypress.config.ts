import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "src/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
  },
  component: {
    watchForFileChanges: true,
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: {
        configFile: "./vite.config.ts",
        server: {
          port: 4173,
        },
      },
    },
  },
});
