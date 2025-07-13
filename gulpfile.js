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

async function images() {
    const imagemin = (await import('gulp-imagemin')).default;
    const mozjpeg = (await import('imagemin-mozjpeg')).default;
    const optipng = (await import('imagemin-optipng')).default;
    const svgo = (await import('imagemin-svgo')).default;

    return gulp.src('./src/images/**/*')
        .pipe(imagemin([
            mozjpeg({ quality: 75 }),
            optipng({ optimizationLevel: 3 }),
            svgo()
        ]))
        .pipe(gulp.dest('./dist/images'));
}

function watchFiles() {
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
    gulp.watch('./src/images/**/*', images);
}

exports.styles = styles;
exports.images = images;
exports.scripts = scripts;
exports.watch = watchFiles;
exports.default = gulp.parallel(styles, images, scripts);