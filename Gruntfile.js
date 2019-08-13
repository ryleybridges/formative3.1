module.exports = function(grunt) {
  grunt.initConfig({
      jshint: {
          files: ["*.js", "js/script.js"],
          options: {
              globals:{
                  jQuery: true
              }
          }
      },
      jshint: {
        files: ["*.js", "js/script.js"],
        options: {
            globals:{
                jQuery: true
            }
        }
      },
      watch: {
        configFiles: {
          files: [ 'Gruntfile.js', 'config/*.js' ],
          options: {
            reload: true
          }
        }
      }
    });


// load npm tasks
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-watch');

// register tasks
  grunt.registerTask('all', ['sass', 'cssmin']);
  grunt.registerTask('check', ['jshint']);
  grunt.registerTask('default', ['watch']);
}
