module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'app/**/*.js'],
            options: {
                ignores: ['app/main-built.js']
            }
        },
        clean: {
            build: ['app/main-built.js']
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'app',
                    mainConfigFile: 'app/main.js',
                    out: 'app/main-built.js',
                    optimize: 'uglify2', //or none
                    paths: {
                        'requirejs': '../bower_components/requirejs/require',
                        'text': '../bower_components/requirejs-text/text',
                        'durandal': 'empty:',
                        'plugins': 'empty:',
                        'transitions': 'empty:',
                        'knockout': 'empty:',
                        'mapping': 'empty:',
                        'knockout-validation': 'empty:',
                        'bootstrap': 'empty:',
                        'jquery': 'empty:'
                    }
                }
            }
        }
    });

    grunt.registerTask('jsoptimizer', '', function () {
        var filesToInclude = grunt.file.expand({ cwd: 'app' }, '**/*.{js,html}');
        filesToInclude = filesToInclude.map(function (i) {
            if (i.slice(-3) === '.js') {
                return i.slice(0, -3);
            }
            return 'text!' + i; //converting html templates to be text bang
        });
        filesToInclude.unshift('main');
        filesToInclude.unshift('text');
        filesToInclude.unshift('requirejs');

        grunt.config.set('requirejs.compile.options.include', filesToInclude); //modules to be optimized
        grunt.task.run('requirejs');
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('default', ['jshint', 'clean', 'jsoptimizer']);
};