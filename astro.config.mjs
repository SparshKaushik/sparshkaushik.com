import { defineConfig, squooshImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [mdx()],
  adapter: vercel(),
  image: {
    service: squooshImageService(),
  }
});