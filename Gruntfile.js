module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    concat: {
      dist: {
        options: {},
        files: {
          'dist/cartostyles.css': [
            '.tmp/src/scss/**/*.css'
          ]
        }
      }
    },
    sass: {
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
    },
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        },
        files: {
          'dist/cartostyles.css': [
            'dist/cartostyles.css'
          ]
        }
      }
    },
    watch: {
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
    }
  });

  grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'watch:scss']);

};

//
// var gulp  = require('gulp');
// var shell = require('gulp-shell');
// var watch = require('gulp-watch');
//
// gulp.task('watch', function() {
//   gulp.watch('path/to/watch/for/changes/**/*.scss', ['makeStyleguide']);
// });
//
// gulp.task('makeStyleguide',
//   shell.task(
//     ['styleguide']
//   )
// );
//
// gulp.task('default', ['watch']);
