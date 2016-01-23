var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');

gulp.task('browserify', function() {
    gulp.src('src/dashboard.js')
        .pipe(plumber())
        .pipe(browserify({transform: 'reactify', debug: true}))
        .pipe(concat('dash.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('browserify', function() {
    gulp.src('src/front.js')
        .pipe(plumber())
        .pipe(browserify({transform: 'reactify', debug: true}))
        .pipe(concat('front.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('default', ['browserify']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
