# Prizm-lite

Prizm design system, zero-dependency implementation html+css.

**Documentation**: [lite.prizm.site](https://lite.prizm.site)

## Install

### Step 1: Install the Prizm-Lite Package

1. Install from npm.
```
  npm i @prizm-ui/prizm-lite
```

2. Download artefacts

[prizm-lite-0.0.1.tgz](https://registry.npmjs.org/@prizm-ui/prizm-lite/-/prizm-lite-0.0.1.tgz)

### Step 2: Include the Prizm-Lite Styles

Include `@prizm-ui/prizm-lite/styles.css` in your app's stylesheet. You will need to ensure your build process is setup to bundle CSS from npm packages.

```css
@import '@prizm-ui/prizm-lite/styles.css';

```

Alternatively, you can load the theme file using the npm unpkg content delivery network (CDN). See unpkg.com for more details. For example:


```html
<!-- Load the latest version -->
<link rel="stylesheet" href="https://unpkg.com/@prizm-ui/prizm-lite/styles.css" />
<!-- Or load a specific version, recommended -->
<link rel="stylesheet" href="https://unpkg.com/@prizm-ui/prizm-lite@0.0.1/styles.css" />
```

## Setup for web sites

After downloading, extract the files into the directory where your website is located. Your directory will look something like this.

```
MyWebsite/
  |--prizm-lite/
  |  |--styles.css
  |  |--Inter-Black.woff
  |  |--Inter-Bold.woff2
  |  |--...
  |--index.html
```

### HTML Setup

```html
<!DOCTYPE html>
  <html>
    <head>
      <!--Import styles.css-->
      <link type="text/css" rel="stylesheet" href="prizm-lite/styles.css"  media="screen,projection"/>
    </head>

    <body>
    </body>
  </html>
```


### Example templates

[Prizm status](https://github.com/idp-front/prizm-status)


### Development

Build library and publish to npm.

1. npm run build:library 
2. cd ./dist/prizm-lite
3. npm publish

TODO: add `npm publish` to CD
