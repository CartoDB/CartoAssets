var gulp = require('gulp');
var rename = require("gulp-rename");
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

String.prototype.toCamelCase = function () {
  return this.replace(/^([A-Z])|\s(\w)/g, function (match, p1, p2, offset) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
};

gulp.task('default', function () {
  gulp.src(['./icon-font/svgs/*.svg'])

  .pipe(iconfontCss({
    fontName: 'cartoIcon',
    path: './icon-font/template.jst.ejs',
    targetPath: '../scss/_cdb-icon-font.scss',
    fontPath: '../../fonts/'
  }))

  .pipe(iconfont({
    fontName: 'cartoIcon',
    appendCodepoints: true
  }))

  .pipe(gulp.dest('src/fonts/'));

  gulp
    .src('./node_modules/perfect-scrollbar/src/css/*')
    .pipe(rename(function (path) {
      path.basename = '_' + path.basename;
    }))
    .pipe(gulp.dest('./src/scss/vendor/perfect-scrollbar'));
});
