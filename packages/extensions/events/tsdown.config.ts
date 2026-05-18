import { defineConfig } from "tsdown";

export default defineConfig({
  format: ["esm", "cjs"],
  cjsDefault: false,
  publint: true,
  attw: {
    profile: "node16",
    level: "error",
  },
});
