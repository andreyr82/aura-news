module.exports = function (grunt) {

    grunt.initConfig({
        clean: ["build"],
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./app",
                    removeCombined: true,
                    mainConfigFile: "app/app.js",
                    findNestedDependencies: true,
                    fileExclusionRegExp: /^\./,
                    out: "build/app.js",
                    name: 'app',
                    paths: {
                        text:         'bower_components/requirejs-text/text',
                        jquery:     'bower_components/jquery/dist/jquery',
                        backbone: 'bower_components/backbone/backbone-min',
                        backboneLocalstorage: 'bower_components/backbone.localStorage/backbone.localStorage',
                        underscore: 'bower_components/underscore/underscore-min',
                        //bootstrap: 'bower_components/bootstrap/dist/js/bootstrap'
                    },
                    shim: {
                        underscore: { exports: '_' },
                        backbone: { exports: 'Backbone', deps: ['underscore', 'jquery'] },
                        backboneLocalstorage: { exports: 'Store', deps: ['backbone'] },
                        //bootstrap: { deps: ['jquery'] }
                    },
                    include: [
                    //    'underscore',
                    //    'bower_components/aura/lib/aura',
                    //    //'bootstrap',
                    //    'aura_components/spinner/main',
                    //    'aura_components/title/main',
                    //    'aura_components/button/main',
                    //    'aura_components/search/main',
                    //    'aura_components/posts/main',
                    //    'aura_components/post/main',
                    //    'aura_components/feeds/main',
                    //    'aura_components/feed/main'
                    ],
                    exclude: [
                        'jquery',
                        'bootstrap'
                    ]
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'app',
                        src: [
                            'index.html',
                            '404.html',
                            //'aura_components/**/*',
                            'bower_components/**/*',
                            'extensions/**/*',
                            'collections/*',
                            'models/*'
                        ],
                        dest: 'build/'
                    }
                ]
            }
        },
        //imagemin: {
        //    dynamic: {
        //        files: [{
        //            expand: true,
        //            cwd: 'img/',
        //            src: ['**/*.{png,jpg,gif}'],
        //            dest: 'build/img'
        //        }]
        //    }
        //},
        useminPrepare: {
            html: ['build/index.html'],
            options: {
                root: '.',
                dest: 'build'
            }
        },
        cssmin: {
            dist: {
                files: {
                    'application.css': [
                        'styles/main.css',
                        'bower_components/bootstrap/dist/css/bootstrap.css',
                        'bower_components/bootstrap-material-design/dist/css/material-wfont.min.css',
                        'bower_components/bootstrap-material-design/dist/css/ripples.min.css'
                    ]
                }
            }
        },
        usemin: {
            html: ['build/index.html'],
            options: {
                root: '.',
                dest: 'build'
            }
        },
        replace: {
            appbuild: {
                src: ['build/index.html'],
                overwrite: true,
                replacements: [{
                    from: 'app/app',
                    to: "js/app.build"
                }]
            },
            cssversion: {
                src: ['build/index.html'],
                overwrite: true,
                replacements: [{
                    from: '__VERSION__',
                    to: "<%= grunt.template.today('yyyymmddHHss') %>"
                }]
            },
            csscombinedversion: {
                src: ['build/index.html'],
                overwrite: true,
                replacements: [{
                    from: '.application.css',
                    to: ".application.css?v=<%= grunt.template.today('yyyymmddHHss') %>"
                }]
            },
            requirejsversion: {
                src: ['build/index.html'],
                overwrite: true,
                replacements: [{
                    from: '"bust="+Math.random()',
                    to: '"bust=<%= grunt.template.today(\'yyyymmddHHss\') %>"'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/index.html': 'build/index.html'
                }
            }
        },
        'template-module': {
            compile: {
                options: {
                    module: true,
                    useStrict: true,
                    provider: 'underscore',
                    processName: function (filename) {
                        return filename.replace(/^app\//, '');
                    }
                },
                files: {
                    "build/scripts/templates.js" : ["app/aura_components/**/*.hbs"]
                }
            }
        }
        //jst: {
        //    compile: {
        //        options: {
        //            //templateSettings: {
        //            //    interpolate : /\{\{(.+?)\}\}/g
        //            //},
        //            //processName: function (filename) {
        //            //    return filename.replace(/^app\/aura_components\//, '').replace(/\.hbs$/, '');
        //            //}
        //        },
        //        files: {
        //            "build/scripts/templates.js" : ["app/aura_components/**/*.hbs"]
        //        }
        //    }
        //}
        //handlebars: {
        //    compile: {
        //        files: {
        //            "build/scripts/templates.js" : ["app/aura_components/**/*.hbs"]
        //        },
        //        options: {
        //            wrapped: false,
        //            namespace: "Aura.templates",
        //            //processName: function (filename) {
        //            //    return filename.replace(/^app\/aura_components\//, '').replace(/\.hbs$/, '');
        //            //},
        //            //amd: true,
        //            //partialsUseNamespace: true
        //        }
        //    }
        //},
        //concat: {
        //    options: {
        //        separator: "\n\n\n\n//--------\n\n\n"
        //    },
        //    dist: {
        //        src: ['app/aura_components/**/*.js'],
        //        dest: 'build/scripts/aura_components.js'
        //    }
        //}
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-template-module');
    //grunt.loadNpmTasks('grunt-contrib-jst');
    //grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    //grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('default', ['clean', 'template-module', 'requirejs', 'copy', 'useminPrepare', 'concat', 'cssmin', 'usemin', 'replace', 'htmlmin']);
};
