export default defineAppConfig({
  global: {
    meetingLink: "https://cal.com/hugorcd/15min",
    available: true,
  },
  profile: {
    name: "XuDong Zhang",
    job: "Frontend Architect and Designer",
    email: "2219454275@qq.com",
    phone: "(+86) 18081499564",
    picture: "https://avatars.githubusercontent.com/u/25812161?s=48&v=4",
  },
  socials: {
    github: "https://github.com/zxd2219",
    twitter: "",
    linkedin: "",
    instagram: "",
    spotify: "",
  },
  seo: {
    title: "My Portfolio",
    description:
      "A portfolio showcasing my work and skills as a frontend developer.",
    url: "https://zxd2219.nuxt.space",
  },
  ui: {
    colors: {
      primary: "emerald",
      neutral: "neutral",
    },
    notifications: {
      position: "top-0 bottom-auto",
    },
    notification: {
      progress: {
        base: "absolute bottom-0 end-0 start-0 h-0",
        background: "bg-transparent dark:bg-transparent",
      },
    },
    button: {
      slots: {
        base: "cursor-pointer",
      },
      defaultVariants: {
        color: "neutral",
      },
    },
    input: {
      defaultVariants: {
        color: "neutral",
      },
    },
    textarea: {
      defaultVariants: {
        color: "neutral",
      },
    },
    icons: {
      loading: "lucide:loader",
    },
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
});
