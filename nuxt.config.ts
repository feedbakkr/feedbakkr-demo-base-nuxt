// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-21',
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  css: ['~/assets/css/tokens.css'],
  app: {
    head: {
      title: 'feedbakkr-demo-base-nuxt',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
    },
  },
})
