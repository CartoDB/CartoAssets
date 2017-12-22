const POSTCSS = {
  'input': 'src/entry.css',
  'output': 'dist/carto_assets.css',
  'use': [
    'postcss-import',
    'postcss-cssnext'
  ],
  'postcss-import': {
    path: ['src']
  },
  'cssnano': {
    safe: true,
    autoprefixer: false //handled by postcss-cssnext
  },
  'local-plugins': true,
  'map': 'file'
}

if (process.env.NODE_ENV === 'production') {
  POSTCSS.use.push('cssnano'); // add cssnano in production
  POSTCSS.map = false; //sourcemaps to external file
}

module.exports = POSTCSS;
