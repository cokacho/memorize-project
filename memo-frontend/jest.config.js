/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
  },
  setupFilesAfterEnv: [
      '<rootDir>/src/__tests__/mocks/jest.setup.ts'
  ],
  "modulePathIgnorePatterns": ["__tests__/mocks/"]
  // setupFiles: ["jest-localstorage-mock"]
};