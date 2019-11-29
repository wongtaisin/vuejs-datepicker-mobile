module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-unneeded-ternary': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-sequences': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-return-assign': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-const': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
