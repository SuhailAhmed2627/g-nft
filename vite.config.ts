import { defineConfig } from "vite";
import { PORT_CLIENT } from "./config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: PORT_CLIENT,
		proxy: {
			"/api": {
				target: "https://localhost:3000",
				changeOrigin: true,
				secure: false,
				ws: true,
			},
		},
	},
});
