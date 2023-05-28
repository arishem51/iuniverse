import { AliasOptions, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

function createAlias(list: string[]): AliasOptions {
  return list.map((item) => ({
    find: `@${item}`,
    replacement: path.resolve(__dirname, `./src/${item}`),
  }));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: createAlias(["helper", "components"]),
  },
});
