module.exports = {
  dist: {
    options: {
      sourceMap: false,
      outputStyle: 'compressed',
      includePaths: [
        'node_modules/perfect-scrollbar/src/css'
      ]
    },
    files: [{
      expand: true,
      src: [
        'src/scss/entry.scss'
      ],
      dest: '.tmp',
      ext: '.css'
    }]
  }
};
