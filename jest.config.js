module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  snapshotSerializers: ["jest-emotion"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.settings.json",
    },
  },
};
