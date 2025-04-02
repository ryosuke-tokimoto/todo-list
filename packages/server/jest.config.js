module.exports = {
  roots: ['<rootDir>/src/'],
  rootDir: '.',
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  testEnvironment: 'node',
  coverageDirectory: './coverage',
  collectCoverage: process.env.COLLECT_COVERAGE === 'true',
  coverageReporters: ['text', 'html'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/main.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@adapters/(.*)$': '<rootDir>/src/libs/adapters/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
  },
};
