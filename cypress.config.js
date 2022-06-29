const { defineConfig } = require('cypress')

module.exports = defineConfig({
  
  chromeWebSecurity: false,
  viewportWith: 500,
  viewportHeight: 800,
  e2e: {
    baseUrl: 'https://petiesgram-luisrivas123.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    }
  }
})
