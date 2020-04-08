module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "react-app",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // "indent": [2, 4],
    "react/jsx-filename-extension": [0],
    "import/extensions": "off",
    "max-len": [
      "error",
      {
        code: 150,
      },
    ],
    "no-use-before-define": [
      2,
      {
        functions: false,
      },
    ],
    "@typescript-eslint/camelcase": [
      "error",
      {
        properties: "never",
      },
    ],
    "react/jsx-indent": [2, 4],
    "react/prop-types": [0],
    "react/jsx-indent-props": [2, 4],
    "jsx-a11y/label-has-for": [
      2,
      {
        components: ["Label"],
        required: {
          some: ["nesting", "id"],
        },
        allowChildren: false,
      },
    ],

    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
