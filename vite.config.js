import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      injectRegister: "auto",
    }),
    react(),
  ],
});

// import { VitePWA } from "vite-plugin-pwa";
// export default defineConfig({
//   plugins: [VitePWA({ registerType: "autoUpdate" })],
// });
