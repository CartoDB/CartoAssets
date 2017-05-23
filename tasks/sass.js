module.exports = {
  dist: {
    options: {
      sourceMap: false,
      outputStyle: 'compressed'
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
