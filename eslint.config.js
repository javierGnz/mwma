import globals from "globals";
import jseslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettier from "eslint-config-prettier/flat";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ languageOptions: { globals: globals.browser } },
	jseslint.configs.recommended,
	tseslint.configs.recommended,
	eslintPluginAstro.configs.recommended,
	eslintPluginPrettier,
];
