module.exports = function(grunt) {

  grunt.initConfig({
    uncss: {
      dist: {
        files: {
          'css/style.css': ['index.html']
        },
        options: {
          report: 'min' // optional: include to report savings
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-uncss');

  grunt.registerTask('default', ['uncss']);

};