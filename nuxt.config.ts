// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: process.env.PORT || 4000,
    host: process.env.HOST || 'localhost',
  },
})
