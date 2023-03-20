import { defineConfig } from 'vitepress'

// https://vitepress.dev/doc/site-config
export default defineConfig({
  title: 'Geonetwork-UI',
  description: 'Official documentation',
  base: '/gnui-doc',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/why', activeMatch: '/guide/' },
      { text: 'Reference', link: '/doc/architecture', activeMatch: '/doc/' },
    ],

    sidebar: {
      '/guide/': sidebarGuide(),
      '/doc/': sidebarDoc(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/geonetwork/geonetwork-ui' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present GeoNetwork',
    },
  },
})

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'Why ?', link: 'guide/why' },
        { text: 'Get started', link: 'guide/what' },
      ],
    },
  ]
}

function sidebarDoc() {
  return [
    {
      text: 'Get started',
      items: [
        { text: 'Create a new lib', link: 'doc/newlib' },
        { text: 'Create a new app', link: 'doc/newapp' },
      ],
    },
    {
      text: 'Essentials',
      items: [
        { text: 'Architecture', link: 'doc/architecture' },
        { text: 'Theming', link: 'doc/theme' },
        { text: 'State', link: 'doc/state' },
        { text: 'Web components', link: 'doc/wc' },
      ],
    },
  ]
}
