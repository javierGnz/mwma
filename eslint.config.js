import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginAstro from "eslint-plugin-astro";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ languageOptions: { globals: globals.browser } },
	eslintConfigPrettier,
	pluginJs.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	...tseslint.configs.recommended,
];
