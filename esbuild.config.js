const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/assets/main.js"],
    bundle: true,
    outfile: "dist/assets/main.js",
    minify: true,
  })
  .catch(() => process.exit(1));
