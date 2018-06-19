'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task("concatScripts", function(){
  gulp.src([
    'js/circle/autogrow.js',
    'js/circle/circle.js',
    'js/global.js'
  ])
  .pipe(concat("all.js"))
  .pipe(gulp.dest("js"))
});

gulp.task("minifyScripts", function(){
  gulp.src("js/all.js")
  .pipe(uglify())
  .pipe(rename("all.min.js"))
  .pipe(gulp.dest('js'))
});
