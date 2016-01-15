
'use strict';

var gulp = require('gulp');
var del = require('del');
var inject = require('gulp-inject');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');

// need seperate project fr each task
var tsApp = ts.createProject('../../tsconfig.json');
var tsEngineM = ts.createProject('../../tsconfig.json');

// everything you need for development
gulp.task('default', function(callback) {
    runSequence(
        'clean.dist',
        'ts.app',
        'ts.engine.m',
        'inject',
        callback
    );
});

// clean
// --------------------

gulp.task('clean.dist', function(callback) {
     del('dist', callback);
     return del('index.html', callback);
});

// build
// --------------------

gulp.task('ts.app', function() {
    var tsResult = gulp.src('invaders/App/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'))
        .pipe(sourcemaps.init())
        .pipe(ts(tsApp));
    
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/App'));
});

gulp.task('ts.engine.m', function() {
    var tsResult = gulp.src([
            'App/*.ts'
        ])
        .pipe(tslint())
        .pipe(tslint.report('verbose'))
        .pipe(sourcemaps.init())
        .pipe(ts(tsEngineM));
    
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/EngineM/App'));
});

// add script tags
gulp.task('inject', function () {
    var sources = gulp.src([

        // release
        'dist/EngineM/app/*.js',
        'dist/App/*.js'
    ]);

    return gulp.src('invaders/index.html')
        .pipe(inject(sources, { relative: true }))
        .pipe(gulp.dest('invaders/index.html'));
});