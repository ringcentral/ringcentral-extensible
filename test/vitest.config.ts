import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    setupFiles: "dotenv-override-true/config",
    maxWorkers: 1,
    minWorkers: 1,
    testTimeout: 64000,
    watch: false,
  },
});
