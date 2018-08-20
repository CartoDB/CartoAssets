# CartoAssets [![NPM version](http://img.shields.io/npm/v/cartoassets.svg)](https://www.npmjs.org/package/cartoassets)

> Share frontend assets between different CartoDB repositories

### Installation
As easy as:
- ```npm install --global grunt-cli``` [Grunt installation](http://gruntjs.com/getting-started)
- ```npm install --global gulp-cli``` [Gulp installation](https://github.com/gulpjs/gulp)
- ```npm install -g markdown-styleguide-generator``` [StyleGenerator installation](https://www.npmjs.com/package/markdown-styleguide-generator#install)
- ```npm install```

### Build
If you want to use any of the CartoAssets components, after the installation just run:
- ```grunt build```

### Development
It will generate a UI documentation about the components in this repository:
- ```grunt dev```

If you want to check the documentation, it is generated in the ```dist``` folder.

### How to add/update the icon font

See this [instructions](https://github.com/CartoDB/CartoAssets/blob/master/Icon-Fonting.md)

### Publish a new version in NPM
In order to publish a new version of CartoAssets you need to:

- Change version of the package.
- Be a collaborator of the [npm module](https://www.npmjs.com/cartoassets) (Send an email to xavijam[at]cartodb.com).

If you have these previous steps done:

- ```npm publish```

### Publish CartoAssets styleguide and documentation in GH-Pages
Just run this command:

- ```grunt publish```


### Browser support

![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.3.0/archive/chrome_12-48/chrome_12-48_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.3.0/archive/firefox_1.5-3/firefox_1.5-3_48x48.png) | ![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.3.0/edge-tile/edge-tile_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.3.0/opera/opera_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.3.0/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
31+ ✔ | 38+ ✔ | 11+ ✔ | 31+ ✔ | 8+ ✔ |
