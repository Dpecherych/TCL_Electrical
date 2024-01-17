import webpack from 'webpack-stream';
import path from 'path';
import vinylNamed from 'vinyl-named';
export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: false })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(vinylNamed())
    .pipe(
      webpack({
        mode: app.isProduction ? 'production' : 'development',
        devtool: 'inline-cheap-source-map',
        output: { filename: '[name].min.js' },
        resolve: {
          // root: [
          //   path.resolve(app.path.rootFolder + '/node_modules'),
          //   path.resolve(app.path.srcFolder + '/js'),
          // ],
          modules: ['node_modules'],
          extensions: ['.js', '.ts', '.json'],
          alias: {
            '@plugins': path.resolve(app.path.srcFolder + '/js/plugins'),
            '@modules': path.resolve(app.path.srcFolder + '/js/modules'),
          },
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js));
};
