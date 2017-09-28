var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('sass', function () {
    return gulp.src('scss/style.scss').pipe(sourcemaps.init()).pipe(sass({
        outputStyle: 'compact'
        , errLogToConsole: true // Wypisuje w konsoli bledy.
    })).pipe(sourcemaps.write()).pipe(autoprefixer()).pipe(gulp.dest('css'))
});
/*


gulp.task('autoprefixer', () =>
    gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);*/
gulp.task('watch', ['sass'], function () {
    gulp.watch('scss/**/*.scss', ['sass']);
})
