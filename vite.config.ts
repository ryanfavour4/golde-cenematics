import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@routes": path.resolve(__dirname, "./src/routes"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@layouts": path.resolve(__dirname, "./src/layouts"),
            "@svg": path.resolve(__dirname, "./src/assets/svg"),
            "@image": path.resolve(__dirname, "./src/assets/image"),
        },
    },
    plugins: [react()],
});

