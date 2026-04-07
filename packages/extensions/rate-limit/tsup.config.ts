import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["esm", "cjs"],
  bundle: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  target: "es2022",
  tsconfig: "tsconfig.json",
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".cjs" : ".js",
    };
  },
});
