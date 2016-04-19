var gulp = require('gulp'),
    htmlreplace = require('gulp-html-replace');
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

gulp.task('html', function() {
    gulp.src('./src/**/*.html')
    .pipe(htmlreplace({
        portrait: {
            src: 'css',
            tpl: '<link href="%s/portrait.min.css" rel="stylesheet" media="max-width: 480px">'
        },
        print: {
            src: 'css',
            tpl: '<link href="%s/print.min.css" rel="stylesheet" media="print">'
        },
        perf: {
            src: 'js',
            tpl: '<script async src="%s/perfmatters.min.js"></script>'
        },
        style: 'css/style.min.css',
        bootstrap: 'css/bootstrap-grid.min.css',
        mainjs: 'js/main.min.js'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['scripts', 'styles', 'html']);

