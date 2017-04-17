module.exports = function(grunt){

      // Configure task(s)
      grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

sass:{
  dev:{
    options:{
      outputStyle:'expanded'
    },
    files: {
      'CSS/index.css':'src/CSS/*.scss'
    }
  }
},

watch: {
  options: {
    livereload: true
  },
  css:{
    files:['src/CSS/*.scss'],
    tasks:'sass'
  },
  autoprefix: {
    files: ['src/CSS/*.scss'],
    tasks: 'autoprefixer'
  }
},

connect: {
  dev:{
    options:{
      hostname:'localhost',
      port:9000,
      bases:['.']
    }
  }
},

autoprefixer: {
  dev: {
    files:{
      'CSS/index.css':'CSS/index.css'
    }
  }
}
      }); // Closing 'Configuration Task(s)' tag


      // Load the plugins
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');

      // Register task(s)
grunt.registerTask('default',['connect', 'sass', 'autoprefixer', 'watch']);
};
