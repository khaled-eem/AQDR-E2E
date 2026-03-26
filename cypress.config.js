const { defineConfig } = require("cypress");

module.exports = defineConfig({
  

  e2e: {
     baseUrl: "http://localhost:4200",
      env: {
      ApiURL: 'http://localhost:5000/api'  // .NET API
    },
      allowCypressEnv: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
