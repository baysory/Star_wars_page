const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const terser = require('gulp-terser');
const ffmpeg = require('gulp-fluent-ffmpeg');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(terser())
        .pipe(gulp.dest('./dist/js'));
}

function videos() {
    return gulp.src('./src/videos/*.*')
        .pipe(ffmpeg('mp4', function(cmd) {
            return cmd.addOption('-crf', '28');
        }))
        .on('error', function(err) {
            console.error('FFMPEG Error:', err.message);
            this.emit('end'); // Evita que o Gulp quebre em caso de erro
        })
        .pipe(gulp.dest('./dist/videos'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

async function images() {
    const imagemin = (await import('gulp-imagemin')).default;
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.videos = videos;

exports.default = gulp.parallel(scripts, styles, images, videos);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
};
