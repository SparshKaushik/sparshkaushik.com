import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  prefetch: {
    defaultStrategy: "viewport"
  },
  integrations: [
    mdx({
      optimize: true,
    }),
    icon()
  ],
  adapter: vercel(),
  image: {
    service: passthroughImageService(),
  }
});
