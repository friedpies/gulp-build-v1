'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyJS = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const minifyCSS = require('gulp-minify-css');
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

gulp.task("minifyScripts", ['concatScripts'], function(){
  return gulp.src("dist/scripts/all.js")
  .pipe(minifyJS())
  .pipe(rename("all.min.js"))
  .pipe(gulp.dest('dist/scripts'))
});

gulp.task("scripts", ['minifyScripts'], function(){
  del("dist/scripts/all.js");
});

gulp.task("compileSass", function(){
  return gulp.src("sass/global.scss")
  .pipe(rename("all.css"))
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write("./"))
  .pipe(gulp.dest("dist/styles"))
});

gulp.task("minifyCSS", ['compileSass'], function(){
  return gulp.src("dist/styles/all.css")
  .pipe(minifyCSS())
  .pipe(rename("all.min.css"))
  .pipe(gulp.dest('dist/styles'))
});

gulp.task("styles", ['minifyCSS'], function(){
  del('dist/styles/all.css')
});

gulp.task("images", function(){
  gulp.src("images/*")
  .pipe(imagemin())
  .pipe(gulp.dest('dist/content'))
});

gulp.task("clean", function(){
  del('dist');
});
