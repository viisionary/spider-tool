module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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


	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', [
		'babel',
		'uglify',
	]);
};
