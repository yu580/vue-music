// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': 0,
    // 强制使用双引号
    'quotes': [1, 'double'],
    "semi": [0, "never"], //多余的分号
    // allow async-await
    // 空格2个
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'generator-star-spacing': 0,
    'no-multiple-empty-lines': [1, { 'max': 2 }],//空行最多不能超过2行
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eol-last': 0,
    'space-before-function-paren': 0
  }
}
