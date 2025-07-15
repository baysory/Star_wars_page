const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const terser = require('gulp-terser');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(terser())
        .pipe(gulp.dest('./dist/js'));
}

function styles() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function watchFiles() {
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watchFiles;
exports.default = gulp.parallel(styles, scripts);