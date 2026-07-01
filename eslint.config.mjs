import storybook from "eslint-plugin-storybook";

import typescriptRules from "@ethberry/eslint-config/presets/tsx.mjs";
import jestRules from "@ethberry/eslint-config/tests/jest.mjs";

// DON'T ADD ANY RULES!
// FIX YOUR SHIT!!!

export default [
  {
    ignores: [
      "**/dist",
      "**/storybook-static",
      "eslint.config.mjs",
      "jest.config.json",
      "jest.setup.cjs",
    ],
  },

  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.eslint.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: ["./tsconfig.eslint.json"],
        },
      },
    },
  },

  ...typescriptRules,
  ...jestRules,
  ...storybook.configs["flat/recommended"],

  {
    files: ["**/*.stories.tsx"],
    rules: {
      "import/no-unresolved": "off",
    },
  },
];
