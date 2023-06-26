const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kcb3h1',
  e2e: {
    // baseUrl: 'https://saucedemo.com/',
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
