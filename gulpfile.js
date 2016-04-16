var gulp            = require('gulp');
var sass            = require('gulp-ruby-sass');
var jade            = require('gulp-jade');
var plumber         = require('gulp-plumber');
var uglify          = require('gulp-uglify');
var autoprefixer    = require('gulp-autoprefixer');
var browserSync     = require('browser-sync').create();

gulp.task('default', ['jade', 'sass', 'browserSync'], function() {
    
});

gulp.task('jade', function() {
      return gulp.src('./*.jade')
            .pipe(jade())
            .pipe(plumber())
            .pipe(gulp.dest('./'))
            .pipe(browserSync.reload({stream: true}));
})


gulp.task('sass', function() {
    return  sass('assets/main.sass')
           .on('error', sass.logError)
           .pipe(plumber())
           .pipe(autoprefixer({
               browser: ['last 2 versions'],
               cascade: false
           }))
        //    .pipe(uglify())
           .pipe(gulp.dest('assets/css/'))
           .pipe(browserSync.reload({stream: true}));
})

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    });
    
    gulp.watch('./**/*.sass', ['sass']);
    gulp.watch('./**/*.jade', ['jade'])
    gulp.watch('./**/*.html').on('change', browserSync.reload);
})
