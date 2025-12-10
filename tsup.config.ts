// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,               // emit .d.ts
  sourcemap: true,
  clean: true,
  external: [ // dont bundle these
    "react",
    "react-dom",
    "antd",
    "react/jsx-runtime"   // 👈 important for React 17+ new JSX transform
  ]
});