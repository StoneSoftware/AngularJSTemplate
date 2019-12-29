var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
		root:'app',
        livereload: true,
        port: 8888
    });
});

gulp.task('default', gulp.series('connect', function () {

}));