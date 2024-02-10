import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://lucaszhang.net",
  integrations: [robotsTxt(), compress({
    Path: ["./dist", "./_astro", "./images"]
  })]
});