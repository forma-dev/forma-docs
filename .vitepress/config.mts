import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',
  title: "Forma Docs",
  description: "Cultural hub for the modular ecosystem",
  appearance: 'force-dark',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: 'logo/favicon.png' }]
  ],
  themeConfig: {
    logo: {
      light: '../logo/logo.svg',
      dark: '/logo/logo-dark.svg',
    },
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/learn/overview-of-forma' },
      { text: 'Developers', link: 'build/getting-started' },
      { text: 'Bridge', link: '/bridge/bridge-overview' },
      { text: 'FAQ', link: '/faq' }
    ],
    sidebar: [
      {
        text: 'Learn',
        collapsed: true,
        items: [
          { text: 'Overview of Forma', link: '/learn/overview-of-forma' },
          { text: 'Chain Info', link: '/learn/chain-info' },
        ]
      },
      {
        text: 'Developers',
        collapsed: true,
        items: [
          { text: 'Getting Started', link: '/build/getting-started' },
          { text: 'Deployment', link: '/build/deployment' },
          { text: 'Integration', link: '/build/integration' },
          { text: 'Code Repositories', link: '/build/code-repositories' },
        ]
      },
      {
        text: 'Forma Bridge',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/bridge/bridge-overview' },
          { text: 'Bridge Info', link: '/bridge/bridge-info' },
          { text: 'How to Use', link: '/bridge/how-to-use' },
        ]
      },
      {
        items: [
          { text: 'FAQ', link: '/faq' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/forma-dev' },
      { icon: 'x', link: 'https://x.com/Formachain' },
      { icon: 'discord', link: 'https://discord.gg/cfHDU8k7FQ' },
    ],
    footer: {
      message: 'Built on Astria with Celestia underneath. ✨',
      copyright: 'Copyright © 2025 Cocode Labs'
    },
    // ✅ Change "On this page" to "Sections"
    outlineTitle: "Sections"
  }
})
