module.exports = {
  roots: ['packages/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': require.resolve('babel-jest'),
    '^.+\\.svg$': require.resolve('jest-svg-transformer'),
  },
  verbose: true,
  transformIgnorePatterns: ['node_modules/(?!(.*todo.*)/)'],
  setupFilesAfterEnv: [require.resolve('./scripts/enzyme/enzyme.config')],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
};
