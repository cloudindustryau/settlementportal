module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: [          // destination file and source file

          {"assets/css/core.css": "assets/less/core.less"},
          {"assets/css/pages.css": "assets/less/pages.less"},
          {"assets/css/menu.css": "assets/less/menu.less"},
          {"assets/css/components.css": "assets/less/components.less"},
          {"assets/css/custom.css": "assets/less/custom.less"},

        ],
      }
    },
    watch: {
      styles: {
        files: ['assets/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'assets/css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: '/'
                }
            }
        }
  });

  grunt.registerTask('default', ['less', 'watch']);
  grunt.loadNpmTasks('grunt-browser-sync');

};
