# CartoAssets [![NPM version](http://img.shields.io/npm/v/cartoassets.svg)](https://www.npmjs.org/package/cartoassets)

> Share frontend assets between different CartoDB repositories

### Installation
As easy as:
- ```npm install```
- ```npm install -g markdown-styleguide-generator``` [StyleGenerator installation](https://www.npmjs.com/package/markdown-styleguide-generator#install)

### Build
If you want to use any of the CartoAssets components, after the installation just run:
- ```grunt build```

### Development
It will generate a UI documentation about the components in this repository:
- ```grunt dev```

If you want to check the documenation, it is generated in the ```dist``` folder.

### Publish a new version in NPM
In order to publish a new version of CartoAssets you need to:

- Change version of the package.
- Be a collaborator of the [npm module](https://www.npmjs.com/cartoassets) (Send an email to xavijam[at]cartodb.com).

If you have these previous steps done:

- ```npm publish```

### Publish CartoAssets styleguide and documentation in GH-Pages
Just run this command:

- ```grunt publish```
