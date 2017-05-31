var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglifyjs"),
    cssnano = require("gulp-cssnano"),
    rename = require("gulp-rename");

gulp.task('sass', function(){
    return gulp.src("app/sass/main.sass")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("scripts", function(){
    return gulp.src([
        "app/libs/dist/jquery/jquery.min.js",
        "app/libs/magnific-popup/dist/jquery.magnific-popup.min.js",
    ])
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/js"));
});

gulp.task("css-libs", ["sass"], function(){
    return gulp.src("app/css/libs.css")
    .pipe(cssnano())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("app/css"));
});

gulp.task('browser-sync', function(){
    browserSync({
        server:{
            baseDir:"app"
        }
            
    });
});

gulp.task('watch', ["browser-sync", "css-libs", "scripts"], function(){
    gulp.watch("app/sass/**/*.sass", ["sass"]);
    gulp.watch("app/**/*.html", browserSync.reload);
    gulp.watch("app/js/**/*.js", browserSync.reload);
});

gulp.task("build", function(){
   var buildCss = gulp.src([
       "app/css/main.css",
       "app/css/libs.min.css",
   ])
   .pipe(gulp.dest("dist/css")); 
    
    var buildFonts = gulp.src("app/fonts/**/*")
    .pipe(gulp.dest("dist/fonts"));
    
    var buildJS = gulp.src("app/js/**/*")
    .pipe(gulp.dest("dist/js"));
    
    var buildHTML = gulp.src("app/*.html")
    .pipe(gulp.dest("dist"));
}); 