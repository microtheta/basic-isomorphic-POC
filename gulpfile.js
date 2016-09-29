// Update: Hey Folks - I've got a full Gulpfile with everything else over at https://github.com/wesbos/React-For-Beginners-Starter-Files

var babelify    = require('babelify');
var browserify  = require('browserify');
var del         = require('del');
var gulp        = require('gulp');
var gutil       = require('gulp-util');
var source      = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var watchify    = require('watchify');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var notifier = require('node-notifier');


gulp.task('clean', function () {
  del([
    'public/app.js',
  ]);
});

var scripts = {
 b: browserify('./app/app.js', {
   debug: false
 })
 .transform(babelify),
 build: function () {
   gutil.log('🕒 ', gutil.colors.yellow('Building Scripts...'));
   return scripts.b
     .bundle()
     .on('error', gutil.log.bind(gutil, '❌ ', gutil.colors.red('Error:')))
     .pipe(source('app.js'))
     //.pipe(streamify(uglify()))
     .pipe(gulp.dest("./public"));
 },
 watch: function () {
   watchify(scripts.b)
     .on('update', scripts.build)
     .on('time', function (time) {
        gutil.log('✅ ', gutil.colors.green('Built Scripts in'), gutil.colors.cyan(time + 'ms'));
        notifier.notify({
          'title': 'script Building',
          'message': 'Done! Took Time '+ time/1000 + 's',
          'time': 1000
        });
     });
   return scripts.build();
 }
};


gulp.task('nodemon', function (cb) {
  return nodemon({
    script: 'index.js',
    ignore: ['public/']
  });
});

gulp.task('build', ['clean'], scripts.build);
gulp.task('watch',  scripts.watch);

gulp.task('default', ['nodemon','watch']);
