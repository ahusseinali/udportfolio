var gulp = require('gulp'),
    htmlreplace = require('gulp-html-replace');
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    jpegopt = require('imagemin-jpegoptim'),
    rename = require('gulp-rename');

// Minify all JS files
gulp.task('scripts', function() {
    gulp.src('./src/**/*.js')
    .pipe(uglify())
    .pipe(rename(function(path) {
        path.basename += '.min';
        return path;
    }))
    .pipe(gulp.dest('./dist'));
});

// Minify all CSS files
gulp.task('styles', function() {
    gulp.src('./src/**/*.css')
    .pipe(minifyCSS())
    .pipe(rename(function(path) {
        path.basename += '.min';
        return path;
    }))
    .pipe(gulp.dest('./dist'));
});

// Minify all HTML files and change links to CSS and JS to use the minified versions
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
        bootstrap: 'css/bootstrap-grid.min.css',
        style: 'css/style.min.css',
        mainjs: 'js/main.min.js'
    }))
    .pipe(gulp.dest('./dist'));
});

// Compress images
gulp.task('images', function() {
    gulp.src(['./src/**/*.+(jpg|png)', '!./src/views/images/pizzeria.jpg'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('largeImg', function() {
    gulp.src('./src/**/pizzeria.jpg')
    .pipe(jpegopt({progressive: true, size: '15%'})())
    .pipe(gulp.dest('./dist'));
});

gulp.task('config', function() {
    gulp.src('./src/web.config')
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['scripts', 'styles', 'html', 'images', 'largeImg', 'config']);

