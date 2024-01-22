import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import purgecss from "@fullhuman/postcss-purgecss";

// Generate CSS/JS Builds
esbuild
  .build({
    entryPoints: [
      "prizm-lite/src/lib/styles.css",
    ],
    outdir: "dist/prizm-lite",
    bundle: true,
    loader: {
      // ".png": "dataurl",
      // ".woff": "dataurl",
      // ".woff2": "dataurl",
      // ".eot": "dataurl",
      // ".ttf": "dataurl",
      // ".svg": "dataurl",
    },
    external: ['*.woff','*.woff2'],
    plugins: [
      sassPlugin({
        async transform(source) {
          const { css } = await postcss([
            purgecss({
              content: ["prizm-lite/src/**/*.html"],
            }),
            autoprefixer,
          ]).process(source, {
            from: "prizm-lite/src/lib/styles.css",
          });
          return css;
        },
      }),
    ],
    minify: true,
    metafile: true,
    sourcemap: false,
  })
  .then(() => console.log("⚡ Build complete! ⚡"))
  .catch(() => process.exit(1));
