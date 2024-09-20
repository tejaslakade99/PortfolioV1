import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // This is the proxy configuration
      "/api": {
        target: "http://localhost:8000", // Backend server URL
        changeOrigin: true, // Changes the origin header to the target URL
        // rewrite: (path) => path.replace(/^\/api/, "/api"), // Rewrite the path if needed
        // This is used when we want to send a request from the frontend to the backend.
        // For example, if the frontend sends a request to `http://localhost:5173/api/somedoc`,
        // but in the backend the corresponding route is at `http://localhost:8000/somedoc` (without the `/api` prefix),
        // we can use the `rewrite` function to modify the request path before it reaches the backend.
        // In this case, `rewrite` removes `/api` from the path, so the request goes to `http://localhost:8000/somedoc`.
      },
    },
  },
});
