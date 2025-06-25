import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function js(done) {
    src('src/js/app.js')
        .pipe( dest('build/js'))
    done()
}

export function css ( done ) {
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError))
        .pipe( dest('build/css', {sourcemaps: true}))
    done()
}

export function html(done) {
    src('index.html')
        .pipe(dest('build'))
    done()
}

export function dev(){
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)
    watch('index.html', html)
}

export const build = series(js, css, html)
export default dev