var gulp = require('gulp')


gulp.task('default', function() {
    return gulp.src('./src/*.css')
        .pipe(gulp.dest('./lib'));
});

