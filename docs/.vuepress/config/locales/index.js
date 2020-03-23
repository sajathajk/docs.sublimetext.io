const nav = require('../nav/')
const sidebar = require('../sidebar/')
module.exports = {
  '/': {
    selectText: 'Languages',
    label: 'English',
    editLinkText: 'Edit this page on GitHub',
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    nav: nav.en,
    sidebar: sidebar.en
  }
}