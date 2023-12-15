module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // 'axios': 'axios/dist/node/axios.cjs',
    // '\\.css$': './src/emptyModule.js',
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }

}