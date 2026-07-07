module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json',
      './packages/*/tsconfig.json',
      './examples/*/tsconfig.json',
      './preset/tsconfig.json'
    ]
  },
  "rules": {
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/consistent-type-assertions": "off"
  }
}
