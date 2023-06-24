/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react'
// import path from 'node:path'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import svgrPlugin from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'),
  //   },
  // },
  plugins: [react(), viteTsconfigPaths(), eslint(), svgrPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './setupTests.ts',
  },
})
