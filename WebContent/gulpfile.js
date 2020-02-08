var gulp = require("gulp");
var connect = require("gulp-connect");//web服务器
var jshint = require("gulp-jshint");//js语法检查
var filter = require("gulp-filter");//过滤
var runSequence = require("run-sequence");//按顺序执行task
var uglify = require('gulp-uglify');//js压缩


var AppConfig = {
    ROOT: "app",
    APPS: ["ag-gird-enterprise", "isteven-multi-select"],
    APP_PATH: "app",
};



gulp.task("server", function () {
    connect.server({
        root: AppConfig.ROOT,
        livereload: true,
        port: 8888
    });
});

gulp.task("check", function () {
    var f = filter(["**", "!*app/bower_components/**", "!*app/isteven-multi-select/script/res/**"]);
    return gulp.src("app/**/*.js")
        .pipe(f)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});
gulp.task("server:dev", gulp.series("check", "server"));

