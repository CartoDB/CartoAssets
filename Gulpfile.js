var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

String.prototype.toCamelCase = function() {
  var str = this.replace('--', '');
  return str.replace(/^([A-Z])|\s(\w)/g, function(match, p1, p2, offset) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
};

gulp.task('default', function(){
  gulp.src(['./icon-font/svgs/*.svg'])

  .pipe(iconfontCss({
    fontName: 'cartoIcon',
    path: './icon-font/template.jst.ejs',
    targetPath: '../scss/icon-font.css.scss',
    fontPath: '../../fonts/'
  }))

  .pipe(iconfont({
    fontName: 'cartoIcon',
    appendCodepoints: true
  }))

  .pipe(gulp.dest('src/fonts/'));
});
