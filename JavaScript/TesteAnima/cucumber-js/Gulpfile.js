var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var cucumber = require('gulp-cucumber');

gulp.task('cucumber', function() {

  var file = "*";
  if (process.argv.length >= 4) {
    file = process.argv[3].replace(/-+/, "");
  }

  return gulp.src('./tests/features/' + file).pipe(cucumber({
    'steps': './tests/features/step_definitions/commom_steps.js',
    'support': './tests/features/support/*.js'
  }))
})