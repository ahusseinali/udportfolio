var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');

// Minify All JS files
gulp.task('scripts', function() {
    gulp.src('./src/**/*.js')
    .pipe(uglify())
    .pipe(rename(function(path) {
        path.basename += '.min';
        return path;
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('styles', function() {
    gulp.src('./src/**/*.css')
    .pipe(minifyCSS())
    .pipe(rename(function(path) {
        path.basename += '.min';
        return path;
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['scripts', 'styles']);

