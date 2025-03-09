import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react({ include: ["**/react/*"] }),
		solidJs({ include: ["**/solid/*"], devtools: true }),
	],
	vite: { plugins: [tailwindcss()] },
});
