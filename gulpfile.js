var gulp = require('gulp');
var htmlrender = require('gulp-htmlrender');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');

gulp.task('css', function () {
  return gulp.src('src/styles/*.css')
    .pipe(concatCss('styles.css'))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('scripts.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest(jsDest));
});

gulp.task('render', function() {
    return gulp.src('src/index.html', {read: false})
        .pipe(htmlrender.render())
        .pipe(gulp.dest('dist'));
});
 
gulp.task('default', function() {
    gulp.watch(['src/**/*.html'], ['render']);
    gulp.watch(['src/styles/*.css'], ['css']);
    gulp.watch(['src/index.html'], ['render']);
});