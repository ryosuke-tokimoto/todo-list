module.exports = {
  extends: ['@monorepo/eslint-config/.eslintrc'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
