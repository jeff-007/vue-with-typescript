module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-parens': 0, // allow paren-less arrow functions
    'generator-star-spacing': 0, // allow async-await
    // allow debugger during development
    'no-unused-vars': [1, {
      vars: 'local', // 允许声明未使用变量
      args: 'none' // 参数不检查
    }],
    semi: [0], // 关闭语句强制分号结尾
    'no-multiple-empty-lines': [0, { max: 100 }], // 空行最多不能超过100行
    'no-mixed-spaces-and-tabs': [0], // 关闭禁止混用tab和空格
    'prefer-const': 1, // 是否优先使用const
    'space-before-function-paren': [0, 'always'], // 函数定义时括号前面要不要有空格
    'dot-notation': [0, { allowKeywords: true }] // 避免不必要的方括号
  }
}
