// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,               // emit .d.ts
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "antd"] // don't bundle these
});