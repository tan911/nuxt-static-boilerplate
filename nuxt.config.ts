// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/image',
      '@nuxt/fonts',
      '@nuxtjs/sitemap',
      '@nuxtjs/robots',
    ],
    routeRules: {},
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
})