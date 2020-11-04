module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/esm/", "/cjs/", "/umd/"],
  snapshotSerializers: ["jest-emotion"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
