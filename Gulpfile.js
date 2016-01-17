var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

gulp.task('default', function(){
  gulp.src(['./icon_font/svgs/*.svg'])

  .pipe(iconfontCss({
    fontName: 'cartoIcon',
    path: './icon_font/template.scss',
    targetPath: '../scss/icon-font.css.scss',
    fontPath: '../../fonts/'
  }))

  .pipe(iconfont({
    fontName: 'cartoIcon',
    appendCodepoints: true 
  }))

  .pipe(gulp.dest('src/fonts/'));
});
