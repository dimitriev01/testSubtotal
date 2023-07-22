module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/test/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  transform: {
    '^.+\\.(js|ts)$': 'ts-jest',
  },
};
