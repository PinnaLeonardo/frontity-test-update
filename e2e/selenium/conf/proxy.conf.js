import { commonConfig } from "./common.conf.js";

const { ...rest } = commonConfig;

exports.config = {
  ...rest,
  specs: ["./selenium/tests/specs/module/*.spec.js"],
  exclude: ["./selenium/tests/specs/module/use-in-view.spec.js"],
  commonCapabilities: {
    "browserstack.local": true,
    "browserstack.localIdentifier": "SeleniumLocalhost",
    "browserstack.use_w3c": true,
    "bstack:options": {
      buildName: "Proxy-tests",
      debug: true,
    },
  },
  capabilities: [
    //Chrome - Between 49 and 60
    {
      os: "Windows",
      os_version: "10",
      browserName: "Chrome",
      browser_version: "54.0",
    },
    {
      os: "Windows",
      os_version: "XP",
      browserName: "Chrome",
      browser_version: "49.0",
    },
    {
      os: "OS X",
      os_version: "Catalina",
      browserName: "Chrome",
      browser_version: "60.0",
    },
    {
      os: "OS X",
      os_version: "Snow Leopard",
      browserName: "Chrome",
      browser_version: "49.0",
    },
    // Firefox - Between 18 and 59
    {
      os: "Windows",
      os_version: "10",
      browserName: "Firefox",
      browser_version: "51.0",
    },
    {
      os: "Windows",
      os_version: "XP",
      browserName: "Firefox",
      browser_version: "18.0",
    },
    {
      os: "OS X",
      os_version: "Catalina",
      browserName: "Firefox",
      browser_version: "59.0",
    },
    {
      os: "OS X",
      os_version: "Snow Leopard",
      browserName: "Firefox",
      browser_version: "18.0",
    },
    // Edge - Between 12 and 15
    {
      os: "Windows",
      os_version: "10",
      browserName: "Edge",
      browser_version: "15.0",
    },
  ],
};
// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  Object.assign(caps, exports.config.commonCapabilities);
});
