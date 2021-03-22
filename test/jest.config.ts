const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv-override-true/config'],
  testTimeout: 256000,
};

export default config;
