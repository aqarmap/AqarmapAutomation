exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['registeration.js'],
  capabilities: {
  	'browserName': 'firefox'
  }
};
