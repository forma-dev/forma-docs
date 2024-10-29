import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',
  title: "Forma Docs",
  description: "Cultural hub for the modular ecosystem",
  appearance: 'force-dark',
  cleanUrls: true,
  themeConfig: {
    logo: {
      light: '../logo/logo.svg',
      dark: '/logo/logo-dark.svg',
    },
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/quick-start' }
    ],
    sidebar: [
      {
        text: 'Learn',
        collapsed: true,
        items: [
          { text: 'Overview of Forma', link: '/learn/overview-of-forma' },
          { text: 'Ecosystem', link: '/learn/ecosystem' },
        ]
      },
      {
        text: 'Build on Forma',
        collapsed: true,
        items: [
          { text: 'Getting Started', link: '/build/getting-started' },
          { text: 'Deployment', link: '/build/deployment' },
          { text: 'Integration', link: '/build/integration' },
        ]
      },
      {
        text: 'Forma Bridge',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/bridge/bridge-overview' },
          { text: 'How to Use', link: '/bridge/how-to-use' },
        ]
      },
      {
        items: [
          { text: 'FAQ', link: '/build/getting-started' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
