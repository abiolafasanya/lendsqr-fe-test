/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.config.ts'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/node_modules/identity-obj-proxy',
  },
  clearMocks: true,
  moduleDirectories: ['node_modules'],

  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],

  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '<rootDir>/__tests__/**/*.{js,jsx,ts,tsx}',
  ],

  transform: { '^.+\\.(js|jsx|ts|tsx|svg)$': 'esbuild-jest' },

  testPathIgnorePatterns: ['/node_modules/'],

  transformIgnorePatterns: ['/node_modules/'],

  verbose: true,
};
