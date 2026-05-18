import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/**/*.ts", "!src/**/*.d.ts"],
  format: ["esm", "cjs"],
  unbundle: true,
  cjsDefault: false,
  publint: true,
  attw: {
    profile: "node16",
    level: "error",
  },
});
