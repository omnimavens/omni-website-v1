// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	modules: [
		'@nuxt/content',
		'@nuxt/hints',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxt/ui'
	],

	css: [
		"assets/css/custom.css",
		"assets/css/responsive.css",
		"@fortawesome/fontawesome-free/css/all.css"
	],

	
	/*
		❗ Please read the docs before updating runtimeConfig
		https://nuxt.com/docs/guide/going-further/runtime-config
	*/
	runtimeConfig: {
		// Private keys are only available on the server
		// AUTH_ORIGIN: process.env.AUTH_ORIGIN,
		// AUTH_SECRET: process.env.AUTH_SECRET,

		// Public keys that are exposed to the client.
		public: {
		appName: `${process.env.APP_NAME} admin app`,
		appPanel: `${process.env.APP_NAME} admin panel`,
		apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
		// mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
		},
	},
})