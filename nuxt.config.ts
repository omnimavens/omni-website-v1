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
})