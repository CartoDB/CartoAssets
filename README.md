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

How to make changes in the CartoDB icon font
--------------------------------------------

If you want to edit, add or remove any icon in our CartoDB font, you should follow these steps:

- Check you have [Sketch](http://bohemiancoding.com/sketch/) last version.
- Open [font.sketch](http://github.com/CartoDB/CartoAssets/blob/master/icon_font/font.sketch) file and make your changes.

### Rules for the icons:
- Size should have at max 500px of width/height.
- Place the icon accordingly with the grid.
- Icons should be completely black.
- Group the icon if it has several parts.
- Make icons exportable to SVG.
- Name your icon (layer/group) according to the pattern `icon-font_xx_Name`, where xx is a unique integer (increase it for each new icon).

### When you're done with changes

- Select all the icons, and export them to `app/assets/fonts/icon_font/svgs` folder (option should be visible in the bottom corner in your Sketch app):
  - ![screen shot 2015-01-16 at 11 40 36](https://cloud.githubusercontent.com/assets/978461/5774986/93dc90e8-9d74-11e4-8064-a478e55d392b.png)
  - Take into account that ```svgs``` folder is ignored.
- Open your terminal app and go to the CartoDB root folder.
- Install your node dependencies: `npm install`
- Now we will generate the new icon fonts + stylesheet. Just run: `./node_modules/.bin/gulp`
- Check that your `icon-font.css.scss` and the `cartoIcon` fonts have been edited: 
  - ![screen shot 2015-01-16 at 11 02 53](https://cloud.githubusercontent.com/assets/978461/5775004/acf10faa-9d74-11e4-893c-790da626d894.png)

All done!
