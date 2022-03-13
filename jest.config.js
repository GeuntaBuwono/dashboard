const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@lib(.*)$': '<rootDir>/src/lib$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1'
  }
};
