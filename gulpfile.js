const gulp = require('gulp');
const webpackStream = require('gulp-webpack');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

const PORT = 3000;

gulp.task('lint', () => {
  // place code for linting here
});

gulp.task('sass', () => {
    // place code to build your sass files here
});

gulp.task('test', () => {
    // place code for testing here
});

gulp.task('webpack', () => {
    // place code for run webpack dev server here
  gulp.src('src/entry.js')
        .pipe(webpackStream(webpack))
        .pipe(gulp.dest('dist/'));
});

gulp.task('run', () => {
  const compiler = webpack(config);
  new WebpackDevServer(compiler).listen(PORT, 'localhost', (err) => {
    if (err) {
      console.error(err, 'Error while starting webpack dev server');
    }
    console.log(`Listening at localhost:${PORT} , start compiling...`);
  });
});
