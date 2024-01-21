
const { defineConfig } = require('cypress')



module.exports = defineConfig({
  reporter: 'mochawesome',  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: 'https://demoqa.com/',
    contactListURL: 'https://thinking-tester-contact-list.herokuapp.com/'
    
  }
});
