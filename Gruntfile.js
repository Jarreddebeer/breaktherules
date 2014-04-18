module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
        build: {
            files: [
                {src: 'src/index.html', dest: 'build/index.html'},
                {src: 'src/favicon.png', dest: 'build/favicon.png'},
                {expand: true, cwd: 'src/img', src: '**', dest: 'build/img'}
            ]
        }
    },

    clean: {
        build: {
            src: ['build']
        },
        stylesheets: {
            src: ['build/**/*.css', '!build/website.css']
        },
        scripts: {
            src: ['build/**/*.js', '!build/website.js']
        }
    },

    cssmin: {
        build: {
            files: {
                'build/website.css': [
                    'src/css/normalize.css',
                    'src/css/style.css',
                    'src/css/slideshow.css',
                    'src/vendor/vegas/jquery.vegas.css']
            }
        }
    },

    processhtml: {
        dist: {
            files: {
                'build/index.html': ['src/index.html']
            }
        }
    },

    uglify: {
      build: {
          files: {
              'build/website.js': [
                  'src/js/modernizr.custom.js',
                  'src/js/gridgallery.js',
                  'src/vendor/vegas/jquery.vegas.js',
                  'src/js/imagesloaded.pkgd.min.js',
                  'src/js/classie.js']
          }
      }
    }

  });

  // Load uglify plugin
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml')

  // Default task(s)

  grunt.registerTask(
      'stylesheets',
      'Compiles the stylesheets.',
      ['cssmin', 'clean:stylesheets']
  );

  grunt.registerTask(
      'scripts',
      'Compiles Javascript files.',
      ['uglify', 'clean:scripts']
  );

  grunt.registerTask(
      'phtml',
      'Process script and link tags in the html file.',
      ['processhtml']
  )

  grunt.registerTask(
      'build',
      'Compiles all assets and copies files to build directory.',
      ['clean:build', 'copy', 'stylesheets', 'scripts', 'phtml']
  );

}
