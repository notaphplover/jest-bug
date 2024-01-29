/** @type {!import("@jest/types").Config.InitialOptions} */
module.exports = {
  passWithNoTests: true,
  rootDir: ".",
  roots: ["<rootDir>"],
  testEnvironment: "jest-environment-node",
  testMatch: ["<rootDir>/src/**/*.spec.js"],
};
