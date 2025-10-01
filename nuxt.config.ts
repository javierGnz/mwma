import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	css: ["~~/app/assets/global.css"],
	devtools: { enabled: true },
	i18n: {
		defaultLocale: "es",
		locales: [
			{
				code: "es",
				file: "es.json",
				name: "Español",
			},
			{
				code: "en",
				file: "en.json",
				name: "English",
			},
		],
	},
	modules: ["@nuxt/scripts", "@nuxt/ui", "@nuxtjs/i18n", "@nuxtjs/supabase"],
	nitro: {
		experimental: {
			tasks: true,
		},
	},
	supabase: {
		// TODO: this will be removed when the proper auth is implemented
		redirect: false,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
