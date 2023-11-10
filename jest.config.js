module.exports = {
  preset: 'react-native',
  setupFiles: [
    './jest.setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js'
  ],
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src'],
  clearMocks: true,
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^features/(.*)': '<rootDir>/src/features/$1',
    '^hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^utils/(.*)': '<rootDir>/src/utils/$1',
  },
  modulePathIgnorePatterns: ['.*__mocks__.*'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js?(x)',
    'src/**/*.tsx',
    'src/**/*.ts',
    '!src/*.js?(x)',
    '!src/**/index.ts',
    '!src/**/index.tsx',
    '!src/**/test*'
  ],
  coveragePathIgnorePatterns: [
    '.*__snapshots__/.*',
    '/node_modules/',
    '/coverage/',
    '/android/',
    '/ios/',
    '/src/__mocks__/',
    '/src/styles/',
    '/src/types',
    '.consts.ts',
    '.const.ts',
    '.types.ts',
    '.styles.ts',
    '.mock.ts',
    'types.ts'
  ],
  coverageReporters: ['html', 'text', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
