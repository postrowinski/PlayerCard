module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'css/style.css': 'scss/style.scss'
            }
        }
    },
    
    watch: {
    	scripts: {
			files: ['scss/style.scss'],
			tasks: ['sass'],
			options: {
				spawn: false,
			},
    	} 
	},
	  
	browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html',
                        '*.js'
                    ]
                },
                options: {
					watchTask: true,
                    server: './'
                }
            }
        }

  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};