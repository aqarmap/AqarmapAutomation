exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['leads.js'],
  capabilities: {
    'browserName': 'firefox'
  /*'browserName': 'chrome',
  'chromeOptions': {
    'args': ['no-sandbox']
    }*/
  }
};
