import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default [
  {
    ignores: ["dist/**", "node_modules/**", "src/config/db/**"],
  },
  js.configs.recommended, // Base JS rules
  ...tseslint.configs.recommended, // TypeScript recommended rules
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      sourceType: "module",
    },
    rules: {
      // Optional: Add your own rules here
       "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
  "@typescript-eslint/no-empty-object-type": "off",
    },
  },
];
