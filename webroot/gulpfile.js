var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('sass', function(){
    return gulp.src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
    .pipe(sourcemaps.write('./css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function(){
    gulp.watch('./sass/*.scss',['sass']);
});

gulp.task('concat', function(){
    return gulp.src(['!./js/master.js','./js/**/*.js','./bower_components/angular-**/*.min.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('master.js'))
    .pipe(sourcemaps.write('./js/'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('concat:watch', function(){
    gulp.watch('./js/**/*.js',['concat','compress']);
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('./js/master.js'),
        uglify({mangle : false}),
        gulp.dest('./js/')
    ],
    cb
  );
});

gulp.task('default',['sass:watch','concat:watch']);
gulp.task('serve',['sass','concat','compress']);
