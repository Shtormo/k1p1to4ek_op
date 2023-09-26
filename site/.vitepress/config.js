import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Максим Старостин",
  description: "Завдання Максима Старостина",

  // replace knu-template with name of your repository
  base: "/k1p1to4ek_op/",

  themeConfig: {
    nav: [{ text: "Лабораторні", link: "/labs/1" }],

    sidebar: [
      {
        text: "Лабораторні роботи",
        items: [{ text: "Лабораторна робота №1", link: "/labs/1" }],
      },
    ],

    export default defineConfig({
  ..
  themeConfig: {
    ...,
    sidebar: [
      ...,
      {
        text: "Лабораторні роботи",
        items: [
          ...,
          { text: "Лабораторна робота №2", link: "/labs/2" }
        ],
      },
    ],
  },
})

