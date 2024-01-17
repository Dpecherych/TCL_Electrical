import includePartials from 'gulp-file-include';
import versionNumber from 'gulp-version-number';
export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'HTML',
            message: 'Error: <%= error.message %>',
          })
        )
      )
      .pipe(
        includePartials({
          prefix: '@@',
          basepath: '@file',
        })
      )
      .pipe(app.plugins.replace(/@img\//g, 'img/'))
      .pipe(app.plugins.replace(/@styles\//g, 'styles/'))
      .pipe(app.plugins.replace(/@js\//g, 'js/'))
      .pipe(
        app.plugins.replace(/@icon\#/g, '/icons/symbol/svg/sprite.symbol.svg#')
      )
      // .pipe(srcSet())
      // .pipe(webHtmlNosvg())
      .pipe(
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json',
          },
        })
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(
        app.plugins.gulpIf(!app.isPruduction, app.plugins.browserSync.stream())
      )
  );
};
