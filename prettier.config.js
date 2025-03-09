/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
	useTabs: true,
	tabWidth: 2,
	printWidth: 100,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	pluginSearchDirs: false,
	objectWrap: "collapse",
	overrides: [{ files: "*.astro", options: { parser: "astro" } }],
	singleAttributePerLine: true,
};

export default config;
