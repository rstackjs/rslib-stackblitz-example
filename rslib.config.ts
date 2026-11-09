import { defineConfig } from "@rslib/core";

export default defineConfig({
  dts: {
    bundle: true,
  },
  tools: {
    rspack: {
      experiments: {
        newCache: true,
      },
    },
  },
});
