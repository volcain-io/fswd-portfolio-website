/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

    grunt.initConfig({
        /* Generate large responsive images */
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: 320,
                        quality: 50
                    }, {
                        name: 'medium',
                        width: 600,
                        quality: 50
                    }, {
                        width: 800,
                        suffix: '_large_1x',
                        quality: 40
                    }, {
                        width: 1600,
                        suffix: '_large_2x',
                        quality: 40
                    }]
                },

                /*
                You don't need to change this part if you don't change
                the directory structure.
                */
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img_src/',
                    dest: 'img/'
                }]
            },
            fw: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: 64,
                        quality: 80
                    }, {
                        name: 'medium',
                        width: 128,
                        quality: 80
                    }, {
                        width: 256,
                        suffix: '_large_1x',
                        quality: 80
                    }, {
                        width: 512,
                        suffix: '_large_2x',
                        quality: 80
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img_src/featured-work/',
                    dest: 'img/featured-work'
                }]
            },
        },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['img'],
            },
        },

        /* Copy logo */
        copy: {
            logo: {
                src: 'img_src/logo.svg',
                dest: 'img/volcain.svg'
            },
            featured_work: {
                expand: true,
                cwd: 'img_src/featured-work/',
                src: '*',
                dest: 'img/featured-work/'
            }
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['img', 'img/featured_work']
                },
            },
        },

    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'copy']);

};
