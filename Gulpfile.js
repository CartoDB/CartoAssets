var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

String.prototype.toTitleCase = function() {
  return this.replace(/\w\S*/g, function(txt){ return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

String.prototype.toCamelCase = function() {
  var str = this.split('--');
  var result;

  if (str && str.length > 1) {
    result = str[0] + str[1].toTitleCase();
  } else {
    result = this;
  }

  return result.replace(/^([A-Z])|\s(\w)/g, function(match, p1, p2, offset) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
};

gulp.task('default', function(){
  gulp.src(['./icon-font/svgs/*.svg'])

  .pipe(iconfontCss({
    fontName: 'cartoIcon',
    path: './icon-font/template.jst.ejs',
    targetPath: '../scss/cdb-icon-font.scss',
    fontPath: '../../fonts/'
  }))

  .pipe(iconfont({
    fontName: 'cartoIcon',
    appendCodepoints: true
  }))

  .pipe(gulp.dest('src/fonts/'));
});
