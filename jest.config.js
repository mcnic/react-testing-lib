module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '/axios/': 'axios/dist/node/axios.cjs',
    // "^axios$": "axios/dist/node/axios.cjs",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  resolver: undefined,
  fakeTimers: {
    enableGlobally: true,
  },
}