import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css'; //Compressing
import webpCSS from 'gulp-webpcss'; //WEBP images
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);
export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: true })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'SCSS',
            message: 'Error: <%= error.message %>',
          })
        )
      )
      .pipe(app.plugins.replace(/@img\//g, '../img/'))
      .pipe(
        sass({
          outputStyle: 'expanded',
          includePaths: ['node_modules', `${app.path.src.scss}/`],
        })
      )
      // .pipe(groupCssMediaQueries())
      .pipe(
        webpCSS({
          webpClass: '.webp',
          noWebpClass: '.no-webp',
        })
      )
      .pipe(autoPrefixer({ grid: true, cascade: true }))
      .pipe(cleanCSS())
      .pipe(
        rename({
          extname: '.min.css',
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(
        app.plugins.gulpIf(!app.isPruduction, app.plugins.browserSync.stream())
      )
  );
};
