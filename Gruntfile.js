//My Twitter App Gruntfile

module.exports = function(grunt){
	
	//Grunt init config
	grunt.initConfig({
		pkg: require('./package.json'),

		// Uglify dist
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'app/<%= pkg.main %>',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},

		// Connect: config grunt server
		connect: {
			server: {
				options: {
					protocol: 'http',
					hostname: 'localhost',
					port: 9010,
					base: {
						path: 'app',
						options: {
							index: 'index.html'
						}
					},
					open: true
				}				
			}			
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Create a http server to serve static content from the disc.
	grunt.loadNpmTasks('grunt-contrib-connect');

	// keep the server running
	grunt.loadNpmTasks('grunt-keepalive');

	// Default task(s).
	grunt.registerTask('default', ['uglify']); //for build task

	// Server task
	grunt.registerTask('serve','Start a static web server', function(target){
		grunt.task.run(['connect:server','keepalive']);
	});
	
};