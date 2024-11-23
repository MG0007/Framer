const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on("file:preprocessor", cucumber())

  // return {
  //   browsers: config.browsers.filter((b) => b.name === 'chrome')
  // };
};
