module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv-override-true/config'],
  testTimeout: 256000,
};
