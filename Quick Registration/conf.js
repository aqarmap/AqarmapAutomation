exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Facebook_scenarios.js'],
  capabilities: {
    'browserName': 'firefox'
  /*'browserName': 'chrome',
  'chromeOptions': {
    'args': ['no-sandbox']
    }*/
  }
};
