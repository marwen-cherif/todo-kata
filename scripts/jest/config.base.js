module.exports = {
  verbose: true,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': require.resolve('babel-jest'),
  },
  transformIgnorePatterns: ['node_modules/(?!(.*savgroup-front.*)/)'],
  setupFilesAfterEnv: [require.resolve('../enzyme/enzyme.config')],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/__mocks__/fileMock.js',
  },
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: [
    'node_modules',
    'build-tools',
    'babel.config.js',
    'jest.config.js',
    'enzyme.config.js',
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};
