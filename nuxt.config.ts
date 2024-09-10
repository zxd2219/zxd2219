export default defineNuxtConfig({
  extends: "content-wind",
  modules: ["@nuxthq/studio"],
  routeRules: {
    "/": { prerender: true },
  },
});
