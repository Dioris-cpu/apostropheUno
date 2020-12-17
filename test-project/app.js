var path = require('path');

var apos = require('apostrophe')({
  shortName: 'test-project',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },


    'one-column-widget':{},
    'two-column-widget':{},
    'three-column-widget':{},
    'products':{},
    'products-pages': {},
    // people who specialize in various products
    'specialist': {},
    'specialist-pages':{},
    'theme':{},
    'test-widgets':{},
    'aspostrophe-global':{
      addFields: [{
        name: 'dealerRecommendedConfig',
        type: 'checkboxes',
        label: 'Recommended Dealer config',
        choices: [
          {
            label: 'Is certified',
            value: 'isCertified'
          },
          {
            label: 'Is perfered',
            value: 'isPreferredDealer'
          },
          {
            label: 'Has a network',
            value: 'networkName'
          }
        ]
      }]
    }

  }
});
