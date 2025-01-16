/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "app/components/**/*.{vue,js,ts}",
    "app/storyblok/**/*.{vue,js,ts}",
    "app/layouts/**/*.vue",
    "app/pages/**/*.vue",
    "app/composables/**/*.{js,ts}",
    "app/plugins/**/*.{js,ts}",
    "app/app.{js,ts,vue}",
    "app/error.{js,ts,vue}",
    "app.config.ts",
    "nuxt.config.ts",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
};
