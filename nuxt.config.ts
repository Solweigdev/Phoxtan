import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      backendUrl: "http://localhost:8000",
      frontendUrl: "http://localhost:3000",
    },
  },
  modules: ["@nuxt/ui", "@nuxtjs/color-mode"],
  css: ['~/assets/scss/main.scss'],
  imports: {
    dirs: ["./utils"],
  },
  experimental: {
    asyncContext: true,
  }
});
