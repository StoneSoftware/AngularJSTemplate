var gulp = require("gulp"),
    connect = require("gulp-connect"),
    jshint = require("gulp-jshint"),
    runSequence = require("run-sequence"),
    filter = require("gulp-filter");

var AppConfig = {
    ROOT: "app",
    APPS: ["ag-gird-enterprise", "isteven-multi-select"],
    APP_PATH: "app",
};



gulp.task("server", function () {
    debugger;
    connect.server({
        root: AppConfig.ROOT,
        livereload: true,
        port: 8888
    });
});

gulp.task("check", function () {
    debugger;
    var f = filter(["**", "!*app/bower_components/**", "!*app/isteven-multi-select/script/res/**"]);
    return gulp.src("app/**/*.js")
        .pipe(f)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});
gulp.task("server:dev", gulp.series("check", "server"));

