module.exports = {
  env: {
    es6: true,
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:react/jsx-runtime",
    "plugin:@next/next/recommended",
  ],
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["off"],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "prettier",
    "import",
    "tailwindcss",
  ],
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/consistent-type-imports": [1],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-shadow": [1],
    "import/no-unresolved": "error",
    "import/no-cycle": "error",
    "tailwindcss/classnames-order": [
      "warn",
      {
        callees: ["twMerge", "classnames"],
        config: `./tailwind.config.ts`,
      },
    ],
    "no-shadow": "off",
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "sort-keys": "error",
  },
  settings: {
    next: {
      rootDir: ".",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: ["tsconfig.json"],
      },
    },
  },
};
