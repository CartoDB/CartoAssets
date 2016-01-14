module.exports = {
  dist: {
    options: {
      sourceMap: false,
      outputStyle: 'compressed'
    },
    files: [{
      expand: true,
      src: [
        'src/scss/**/*.scss'
      ],
      dest: '.tmp',
      ext: '.css'
    }]
  }
};
