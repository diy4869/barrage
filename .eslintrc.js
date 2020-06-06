/*
 * @Author: last order
 * @Date: 2020-06-02 10:02:02
 * @LastEditTime: 2020-06-03 17:15:41
 */

module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    env: {
        browser: true,
        node: true
    }
}