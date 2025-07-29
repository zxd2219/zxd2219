<script setup lang="ts">
import type {
  ContentEnCollectionItem,
  ContentFrCollectionItem,
} from "@nuxt/content";

useScriptCloudflareWebAnalytics({
  token: "7d86677fa0ea42fd85616c341c27ffe4",
});

const { page, isWriting } = defineProps<{
  page: ContentEnCollectionItem | ContentFrCollectionItem;
  isWriting: boolean;
}>();

const route = useRoute();
const { t } = useI18n();
const { link, profile } = useAppConfig();

const pageSEO = computed(() => ({
  title: isWriting ? page?.title : page?.title || t("global.app_title"),
  description: isWriting
    ? page?.description
    : page?.description || t("global.app_description"),
}));

const getTitleTemplate = (title: string | undefined) => {
  if (route.path === "/") return title || `${t("global.app_title")}`;
  if (isWriting) return title;
  return `${title} | ${t("global.app_title")}`;
};

useSeoMeta({
  ogSiteName: t("global.app_title"),
  ogTitle: pageSEO.value.title,
  ogDescription: pageSEO.value.description,
  ogType: isWriting ? "article" : "website",
  ogUrl: "https://zxd2219.nuxt.space",
  author: profile.name,
  title: pageSEO.value.title,
  description: pageSEO.value.description,
  twitterTitle: pageSEO.value.title,
  twitterDescription: pageSEO.value.description,
  twitterCard: "summary_large_image",
});

useHead({
  title: pageSEO.value.title,
  titleTemplate: getTitleTemplate,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "charset", content: "utf-8" },
    { name: "robots", content: "index, follow" },
    { name: "color-scheme", content: "light dark" },
  ],
  link,
});

defineOgImage({
  url: "https://zxd2219.nuxt.space/og.png",
  width: 1200,
  height: 630,
  alt: "Home image",
});
</script>

<template>
  <slot />
</template>
