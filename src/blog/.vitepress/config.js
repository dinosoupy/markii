import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AM Films Blog",
  description: "Blog description",
  themeConfig: {
    search: {
      provider: 'local'
    },
    darkMode: false,
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBar\.vue$/,
          replacement: fileURLToPath(
            new URL('../../../src/components/Navbar.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
