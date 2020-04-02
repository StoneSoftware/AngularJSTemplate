var gulp = require("gulp");
var connect = require("gulp-connect");//web服务器
var jshint = require("gulp-jshint");//js语法检查
var filter = require("gulp-filter");//过滤
var runSequence = require("run-sequence");//按顺序执行task
var uglify = require('gulp-uglify');//js压缩
var minifyCss = require('gulp-clean-css');//css压缩
var htmlmin = require('gulp-htmlmin');//html压缩
var del = require('del');


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
    var f = filter(["**", "!*app/bower_components/**", "!*app/isteven-multi-select/scripts/res/**","!app/amber/js/**"]);
    return gulp.src("app/**/*.js")
        .pipe(f)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task("compressJS", function () {
    gulp.src(['app/**/scripts/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task("compressCSS", function () {
    gulp.src(['app/**/css/*.css'])
        .pipe(minifyCss())
        .pipe(gulp.dest('dist'));
});

gulp.task('compressHTML', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: false,//压缩页面JS
        minifyCSS: false//压缩页面CSS
    };
    gulp.src('app/**/html/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});
gulp.task('clean', function () {
    return del(['dist/**']);
});

var compress = gulp.parallel("compressJS", "compressCSS", "compressHTML");

gulp.task("server:dev", gulp.series("clean", "check", "server"));

