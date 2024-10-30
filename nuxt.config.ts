import { resolve } from 'path';
import { generateRoutes } from "./app/utils/routes"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  ssr: false,
  css: ['~/assets/style/app.scss'],
	vite: {
		build: {
			target: 'esnext',
		},
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern',
					additionalData: `\n@use "~/assets/style/global";`,
				},
			},
		},
	},

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  generate: {
    routes: generateRoutes()
  },
  modules: ['@nuxt/content'],
  alias: {
    '@': resolve(__dirname, 'app')
  },
})
