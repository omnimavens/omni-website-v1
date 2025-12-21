// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  // Disable devtools in production
  devtools: { enabled: false },
  // STATIC GENERATION (VERY IMPORTANT)
  ssr: true,
  nitro: {
    preset: 'static'
  },
  modules: [
    '@nuxt/content',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ],
  css: [
    'assets/css/custom.css',
    'assets/css/responsive.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  scripts: {
		registry: {
			googleTagManager: {
				id: 'GTM-PWDN88D5'
			}
		}
	},
  
  app: {
    baseURL: '/',        // important for Hostinger
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'OMNI MAVENS',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME || 'Omni Mavens',
      appPanel: 'admin panel',
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '',
    },
  },
});