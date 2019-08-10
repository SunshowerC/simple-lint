module.exports = {
    extends: [
        '../../typescript.js'
    ],
    rules: {
      'no-var': 'off',
      'no-undef': 'off',
      'no-redeclare': 'off',
      'no-use-before-define': 'off',
      'no-shadow': 'off',
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'import/first': 'off'
        // 'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }]
    }
};
