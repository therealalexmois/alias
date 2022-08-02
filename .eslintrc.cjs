/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/semi": "off",
    "no-extra-semi": "off",
    "no-space-before-semi": "off",
    semi: "off",
    "semi-spacing": "off",
    "semi-style": "off",
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        bracketSpacing: true,
        endOfLine: "lf",
        htmlWhitespaceSensitivity: "css",
        insertPragma: false,
        bracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 80,
        proseWrap: "always",
        quoteProps: "as-needed",
        requirePragma: false,
        semi: false,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "all",
        useTabs: false,
      },
    ],
  },
}
