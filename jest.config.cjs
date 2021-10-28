/**
 * @type {import("@jest/types/build/Config").InitialOptions}
 */
module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/*.test.ts'],
  testEnvironmentOptions: {
    resources: 'usable',
  },
}
