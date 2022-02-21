module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            presets: ["@babel/preset-react"]
        }
    },
    rules: {
      strict: 0
    },
    env: {
      browser: true,
      node: true
    }
  };
