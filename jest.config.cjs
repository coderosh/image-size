/**
 * @type {import("@jest/types/build/Config").InitialOptions}
 */
module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/*.test.ts'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    resources: 'usable',
  },
}
