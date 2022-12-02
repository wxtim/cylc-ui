const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  taskTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  fixturesFolder: 'tests/e2e/fixtures',
  screenshotsFolder: 'tests/e2e/screenshots',
  videosFolder: 'tests/e2e/videos',

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents (on, config) {
      return require('./tests/e2e/plugins/index.js')(on, config)
    },
    specPattern: 'tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'tests/e2e/support/index.js'
  },

  component: {
    setupNodeEvents (on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    devServer: {
      framework: 'vue-cli',
      bundler: 'webpack'
    }
  },
  // pluginsFile: "tests/e2e/plugins/index.js",
  env: {
    "cypress-plugin-snapshots": {
      "autoCleanUp": false,            // Automatically remove snapshots that are not used by test
      "autopassNewSnapshots": true,    // Automatically save & pass new/non-existing snapshots
      "diffLines": 3,                  // How many lines to include in the diff modal
      "excludeFields": [],             // Array of fieldnames that should be excluded from snapshot
      "ignoreExtraArrayItems": false,  // Ignore if there are extra array items in result
      "ignoreExtraFields": false,      // Ignore extra fields that are not in `snapshot`
      "normalizeJson": true,           // Alphabetically sort keys in JSON
      "prettier": true,                // Enable `prettier` for formatting HTML before comparison
      "imageConfig": {
        "createDiffImage": true,       // Should a "diff image" be created, can be disabled for performance
        "resizeDevicePixelRatio": true,// Resize image to base resolution when Cypress is running on high DPI screen, `cypress run` always runs on base resolution
        "threshold": 0.01,             // Amount in pixels or percentage before snapshot image is invalid
        "thresholdType": "percent"     // Can be either "pixels" or "percent"
      },
      "screenshotConfig": {            // See https://docs.cypress.io/api/commands/screenshot.html#Arguments
        "blackout": [],
        "capture": "fullPage",
        "clip": null,
        "disableTimersAndAnimations": true,
        "log": false,
        "scale": false,
        "timeout": 30000
      },
      "serverEnabled": true,           // Enable "update snapshot" server and button in diff modal
      "serverHost": "localhost",       // Hostname for "update snapshot server"
      "serverPort": 2121,              // Port number for  "update snapshot server"
      "updateSnapshots": false,        // Automatically update snapshots, useful if you have lots of changes
      "backgroundBlend": "difference"  // background-blend-mode for diff image, useful to switch to "overlay"
    }
  }
})
