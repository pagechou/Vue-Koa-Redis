module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last':'off',
    'key-spacing':'off',
    'indent':'off',
    'keyword-spacing':'off',
    'no-trailing-spaces':'off',
    'space-before-function-paren':'off',
    'eqeqeq':'off'
  }
}
