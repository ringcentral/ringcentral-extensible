import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node", // Test environment
    setupFiles: "dotenv-override-true/config", // Optional setup file
    maxWorkers: 1,
    minWorkers: 1,
    testTimeout: 64000,
    watch: false,
  },
});
