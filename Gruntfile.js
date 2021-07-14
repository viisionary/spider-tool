module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		ts: {
			default: {
				src: ["src/*.ts", "!node_modules/**"],
				tsconfig: 'tsconfig.json',
				outDir: "lib"
			},
		},
		// babel: {
		// 	options: {
		// 		sourceMap: true,
		// 		presets: ['@babel/preset-env']
		// 	},
		// 	dist: {
		// 		files: [{
		// 			expand: true,
		// 			src: ['lib/*.js'],
		// 			dest: 'dist',
		// 			ext: '.js'
		// 		}]
		// 	}
		// },
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					captureFile: 'results.txt', // Optionally capture the reporter output to a file
					quiet: false, // Optionally suppress output to standard out (defaults to false)
					clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
					clearCacheFilter: (key) => true, // Optionally defines which files should keep in cache
					noFail: false // Optionally set to not fail on failed tests (will still fail on other errors)
				},
				src: ['lib/test/*.spec.js']
			}
		},
		uglify: {
			options: {
				//在头部添加 js文件名/版本号和时间的注释
				stripBanners: true,
				banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			// files: ['lib/src/*.js', ],
				dist: {
					files: [{
						expand: true,
						cwd:"lib/",
						src: ['src/*.js'],
						dest: 'dist/',
						ext: '.js',
						extDot: 'first',
						rename: function (e,name) {       // The value for rename must be a function
							return e+name.substring(4); // The function must return a string with the complete destination
						}
					}]
				}
		},

	});

	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks("grunt-ts");


	grunt.registerTask('default', [
		'ts',
		'mochaTest',
		// 'babel',
		'uglify',
	]);

	// grunt.file.delete('lib')
};
