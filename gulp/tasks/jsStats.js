import webpack from 'webpack-stream';
import path from 'path';
import vinylNamed from 'vinyl-named';
import analyzer from 'webpack-bundle-analyzer';
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
        plugins: [
          new analyzer.BundleAnalyzerPlugin({
            // writes to <webpack output dir>/stats.json by default
            generateStatsFile: true,
          }),
        ],
        mode: 'production',
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
