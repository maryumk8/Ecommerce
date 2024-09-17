module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transforms TypeScript files
  },
  transformIgnorePatterns: [
    '/node_modules/(?!axios)/', // Ignore node_modules, except axios
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock non-JS modules (e.g., CSS)
  },
};
