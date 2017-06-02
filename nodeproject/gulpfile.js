var gulp = require('gulp');
var jshint = require('gulp-jshint');

var jsFiles = ['*.js','src/**/*.js'];

gulp.task('style',() => {
    return gulp.src(jsFiles).pipe(jshint())
});

gulp.task('inject', () => {
   var wiredep = require('wiredep').stream;
   var options = {bowerJson: require("./bower.json"),
       directory:'./bower_components'
   }
   
   return gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(gulp.dest('./src/views'));
});