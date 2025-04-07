/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "./src/$1",
    // '\\.css\\.js$': './jest/cssModuleMock.ts',
  },
  setupFilesAfterEnv: ['./jest/setupTestFramework.ts'],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", {
      "tsconfig": "./tsconfig.rtl.json"
    }],
    "^.+\\.(js|jsx)$": ["babel-jest", {
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    }]
  },
  setupFiles: [
    './jest/mockDom.ts',
  ],
  testMatch: ["**/*.spec.rtl.tsx"],
  transformIgnorePatterns: [
    'node_modules/(?!(monaco-editor|@ui5|lit-html|cheerio)/)',
  ]
};