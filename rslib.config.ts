import { defineConfig } from "@rslib/core";

export default defineConfig({
  dts: {
    bundle: true,
  },
  performance: {
    buildCache: false,
  },
});
