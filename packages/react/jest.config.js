module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/esm/", "/cjs/", "/umd/"],
  snapshotSerializers: ["@emotion/jest/serializer"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
