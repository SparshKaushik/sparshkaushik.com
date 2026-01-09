import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	output: "static",
	prefetch: {
		defaultStrategy: "viewport",
	},
	integrations: [
		mdx({
			optimize: true,
		}),
		icon(),
	],
	adapter: vercel(),
	image: {
		service: passthroughImageService(),
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
