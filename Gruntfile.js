module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    concat: require('./tasks/concat'),
    connect: require('./tasks/connect'),
    clean: require('./tasks/clean'),
    sass: require('./tasks/sass'),
    cssmin: require('./tasks/cssmin'),
    copy: require('./tasks/copy'),
    shell: require('./tasks/shell'),
    watch: require('./tasks/watch'),
    'gh-pages': require('./tasks/gh-pages')
  });

  var baseTasks = [
    'clean',
    'sass',
    'concat',
    'cssmin',
    'copy',
    'shell'
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
  grunt.registerTask('publish', ['build', 'gh-pages']);
};
