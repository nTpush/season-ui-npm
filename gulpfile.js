var gulp = require('gulp'),
    borwserSync = require('browser-sync').create(),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src('./src/theme/src/*.scss')
        .pipe( sass({  loadPath: './lib/css'}) ).pipe( gulp.dest( './lib/css' ) );
});

gulp.task('auto', function () {
    gulp.watch('./src/theme/src/*.scss', gulp.series('sass'));
});

