import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Production builds are served from GitHub Pages at https://mhbelderol.github.io/thrive-web/,
// so assets and routes need the /thrive-web/ prefix. `vite build` and `vite preview` run in
// production mode and use the prefix; the dev server (development mode) keeps running at /.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/thrive-web/' : '/',
  plugins: [react()],
}))
