exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['search.js'],
  capabilities: {
    'browserName': 'firefox'
  /*'browserName': 'chrome',
  'chromeOptions': {
    'args': ['no-sandbox']
    }*/
  }
};
