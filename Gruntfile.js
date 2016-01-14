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
    connect: {
      server: {
        options: {
          port: 9003,
          livereload: 35732,
          open: true,
          hostname: '0.0.0.0', // to be able to access the server not only from localhost
          base: {
            path: '.'
          }
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.sass-cache',
            '.tmp',
            'dist',
            '!dist/.git*'
          ]
        }]
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
    shell: {
      dist: {
        command: 'styleguide'
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

  var baseTasks = [
    'clean',
    'sass',
    'concat',
    'cssmin'
  ];

  var devTasks = baseTasks.concat([
    'connect',
    'watch:scss'
  ]);

  grunt.event.on('watch', function (action, filepath) {
    grunt.task.run('shell');
  });

  grunt.registerTask('dev', devTasks);
  grunt.registerTask('build', baseTasks);
  grunt.registerTask('default', baseTasks);
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
