import svgSprite from 'gulp-svg-sprite';
export const icons = () => {
  return app.gulp
    .src(app.path.src.icons)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'ICONS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      svgSprite({
        shape: { transform: ['svgo'] },
        mode: {
          sprite: '.svg',

          symbol: {
            inline: true, // Prepare for inline embedding
          },
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.icons))
    .pipe(
      app.plugins.gulpIf(!app.isPruduction, app.plugins.browserSync.stream())
    );
};
