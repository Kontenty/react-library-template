// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

const jestConfig = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};

module.exports = jestConfig;
