module.exports = {
  scss: {
    files: [
      'src/scss/**/*.scss'
    ],
    tasks: [
      'sass',
      'concat',
      'cssmin'
    ],
    options: {
      spawn: false,
      livereload: 35732
    }
  }
};
