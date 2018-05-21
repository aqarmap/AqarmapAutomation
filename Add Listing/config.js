exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['add_listing.js'],
  capabilities: {
    'browserName': 'firefox'
  /*'browserName': 'chrome',
  'chromeOptions': {
    'args': ['no-sandbox']
    }*/
  }
};
