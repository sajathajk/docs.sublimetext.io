const path = require('path')
const themeConfig = require('./config/theme/')

module.exports = {
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'sublime text community' }],
    ['meta', { name: 'keywords', content: 'sublime text,sublime,documentation' }],
    ['meta', { name: 'theme-color', content: '#ff6600' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon_vuepress_reco.png' }],
    ['link', { rel: 'mask-icon', href: '/icon_vuepress_reco.svg', color: '#ff6600' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon_vuepress_reco.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: 'reco',
  themeConfig,
  locales: {
    '/': {
      lang: 'en-US',
      title: "Unofficial Sublime Text Documentation",
      description: 'Community Driven Sublime Text Documentation'
    }    
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        components: [
          {
            name: 'reco-home-page-one',
            path: path.resolve(__dirname, './components/HomePageOne.vue')
          }
        ],
      }
    ],
    ['sitemap', {
      hostname: 'https://docs.sublimetext.io'
    }]
  ]
}  