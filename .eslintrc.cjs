module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs' /*'vite.config.ts'*/],
    parserOptions: {
        project: './tsconfig.json',
    },
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'react-refresh', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 0,
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
    },
}
