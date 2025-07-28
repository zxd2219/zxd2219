export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/scripts",
  ],

  imports: {
    presets: [
      {
        from: "vue-sonner",
        imports: ["toast"],
      },
    ],
  },

  devtools: {
    enabled: true,
  },

  css: ["~/assets/style/main.css"],

  site: {
    url: "https://zxd2219.nuxt.space",
    defaultLocale: "en",
    indexable: true,
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
    preview: {
      api: "https://api.nuxt.studio",
      dev: true,
    },
  },

  mdc: {
    highlight: {
      theme: {
        dark: "github-dark",
        default: "github-dark",
        light: "github-light",
      },
    },
  },

  runtimeConfig: {
    public: {
      resend: !!process.env.NUXT_PRIVATE_RESEND_API_KEY,
    },
  },

  routeRules: {
    // Needed to activate preview on Nuxt Studio
    "/": { prerender: false },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    viewTransition: true,
  },

  compatibilityDate: "2025-01-05",

  nitro: {
    experimental: {
      websocket: true,
    },
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ["zh_cn", "/en", "/fr"],
    },
  },

  hooks: {
    "nitro:config": (config) => {
      if (process.env.NUXT_PRIVATE_RESEND_API_KEY) {
        config.handlers?.push({
          method: "post",
          route: "/api/emails/send",
          handler: "~~/server/emails/send.ts",
        });
      }
    },
  },

  i18n: {
    locales: [
      { code: "zh_cn", name: "Chinese", language: "zh-CN" },
      { code: "en", name: "English", language: "en-US" },
      { code: "fr", name: "French", language: "fr-FR" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    strategy: "prefix_and_default",
    defaultLocale: "zh_cn",
    vueI18n: "~/i18n.config.ts",
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    provider: "iconify",
  },

  ogImage: {
    zeroRuntime: true,
  },
});
