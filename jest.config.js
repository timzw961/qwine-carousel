/** @type {import('jest').Config} */
const config = {
testEnvironment: "jsdom",
verbose: true,
setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1"
},
extensionsToTreatAsEsm: ['.jsx'],
transform: {
    "^.+\\.[t|j]sx?$": ["babel-jest", {
    "presets": [
        ["@babel/preset-env", {
        "targets": {
            "node": "current"
        }
        }],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ]
    }]
},
transformIgnorePatterns: ["/node_modules/(?!(some-dependency)/)"],
testEnvironmentOptions: {
    url: "http://localhost"
}
};

module.exports = config;
