module.exports = {
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets

    // Handle module aliases
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@tabs(.*)$': '<rootDir>/src/tabs/$1',
    '^@api(.*)$': '<rootDir>/src/apis/$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks/$1',
    '^@slices(.*)$': '<rootDir>/src/slices/$1',
    '^@utils(.*)$': '<rootDir>/src/utils/$1',
  },
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress/'],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    // '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {presets: ['next/babel']}],
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native-payfort-sdk|react-native)/',
  ],
  globals: {
    __DEV__: true,
  },
};
