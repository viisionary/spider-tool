module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		ts: {
			default: {
				tsconfig: 'tsconfig.json'
			}
		},
		babel: {
			options: {
				sourceMap: true,
				presets: ['@babel/preset-env']
			},
			dist: {
				files: {
					'dist/renameKeys.js': 'renameKeys.js'
				}
			}
		},
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
				src: ['test/*.js']
			}
		},
		uglify: {
			//使用options这个名声
			options: {
				//为true表示允许添加头部信息
				stripBanners: true,
				//在头部添加 js文件名和时间的注释
				banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			//files名称任意，比如下方的build 关键是src-dest要指示好
			files: {
				src: 'dist/renameKeys.js',
				dest: 'dist/renameKeys.min.js'
			}
		},
	});

	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks("grunt-ts");
	grunt.registerTask('default', [
		'ts',
		'babel',
		'mochaTest',
		'uglify',
	]);
};
