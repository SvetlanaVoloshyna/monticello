let projectFolder = 'dist'; //имя папки в которой собирается наш проект
let sourceFolder = '#src'; //папка с нашими исходниками, с исходным кодом

let path = {
    build: {
        html: projectFolder + '/',  //сщздаем html в корне папки dist
        css: projectFolder + '/css/',
        js: projectFolder + '/js/',
        img: projectFolder + '/img/',
        fonts: projectFolder + '/fonts/',

    },
    src: {
        html: [sourceFolder + '/*.html', '!' + sourceFolder + '/_*.html'],
        css: sourceFolder + '/scss/main.scss',
        js: sourceFolder + '/js/main.js',
        img: sourceFolder + '/img/**/*.{jpg,png,svg,ico,webp,gif}',
        fonts: sourceFolder + '/fonts/**/*.{ttf,woff}',
    },
    watch: {
        html: sourceFolder + '/**/*.html',
        css: sourceFolder + '/scss/**/*.scss',
        js: sourceFolder + '/js/**/*.js',
        img: sourceFolder + '/img/**/*.{jpg,png,svg,ico,webp,gif}',

    },
    clean: './' + projectFolder + '/',
}

let { src, dest } = require('gulp');
let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let fileinclude = require('gulp-file-include');
let del = require('del');
let scss = require('gulp-sass');
let gulpAutoprefixer = require('gulp-autoprefixer');
let babel = require('gulp-babel');
let uglify = require('gulp-uglify-es').default;
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');



function browsersync() {
    browserSync.init({
        server: {
            baseDir: './' + projectFolder + '/'
        },
        port: 3000,
        notify: false

    })
}
function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browserSync.stream())
}
function css() {
    return src(path.src.css)
        // .pipe(gulpAutoprefixer({
        //     browsers: ['last 5 versions'],
        //     grid: "autoplace"
        // }))
        .pipe(postcss([autoprefixer({
            browsers: ['last 5 versions'],
            grid: "autoplace"
        })]))
        .pipe(
            scss({
                outputStyle: 'expanded'
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream())
}
function img() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(browserSync.stream())
}
function js() {
    return src(path.src.js)
        .pipe(babel({
            // presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest(path.build.js))
        .pipe(browserSync.stream())
}
function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
        .pipe(browserSync.stream())
}
function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.img], img);
    gulp.watch([path.watch.js], js);
}

function clean() {
    return del(path.clean);
}




let build = gulp.series(clean, html, css, img, js, fonts);
let watch = gulp.parallel(build, watchFiles, browsersync);

exports.fonts = fonts;
exports.js = js;
exports.img = img;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;

exports.default = watch;





// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }

// exports.default = defaultTask
