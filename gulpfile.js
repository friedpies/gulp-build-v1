'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const del = require('del');

gulp.task("concatScripts", function(){
  return gulp.src([
    'js/circle/autogrow.js',
    'js/circle/circle.js',
    'js/global.js'
  ])
  .pipe(maps.init())
  .pipe(concat("all.js"))
  .pipe(maps.write("./"))
  .pipe(gulp.dest("dist/scripts"))
});

gulp.task("scripts", ['concatScripts'], function(){
  gulp.src("dist/scripts/all.js")
  .pipe(uglify())
  .pipe(rename("all.min.js"))
  .pipe(gulp.dest('dist/scripts'))
});

gulp.task("styles", function(){
  gulp.src("sass/global.scss")
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write("./"))
  .pipe(gulp.dest("dist/styles"))
});

gulp.task("images", function(){
  gulp.src("images/*")
  .pipe(imagemin())
  .pipe(gulp.dest('dist/content'))
});

gulp.task("clean", function(){
  del('dist');
});
