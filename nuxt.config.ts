export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  modules: ["@nuxthq/studio"],
  routeRules: {
    "/": { prerender: true },
  },
});
