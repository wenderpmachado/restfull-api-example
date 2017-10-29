const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');
const JSON_FILES = ['webserver/*.json', 'webserver/**/*.json'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
                            .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest(tsProject.options.outDir));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('webserver/**/*.ts', ['scripts']);
});

gulp.task('assets', function() {
  return gulp.src(JSON_FILES)
              .pipe(gulp.dest(tsProject.options.outDir));
});

gulp.task('clear', function () {
  return gulp.src(tsProject.options.outDir, {read: false})
              .pipe(clean());
});

gulp.task('build', ['clear'], function () {
  gulp.start(['scripts', 'assets']);
});

gulp.task('default', ['build'], function () {
  gulp.start(['watch']);
});
