module.exports = {
    root: true,
    env: {
        "node": true
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'import'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base'
    ],
    parserOptions: {
        project: ['./tsconfig.json'],
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/no-var-requires': 0
    },
    overrides: [
        {
            files: ["*.ts"],
            rules: {
                '@typescript-eslint/explicit-function-return-type': ['error']
            }
        }
    ]
};