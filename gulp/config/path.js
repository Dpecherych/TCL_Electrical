import * as nodePath from 'path';
const ROOT_FOLDER = nodePath.basename(nodePath.resolve());
const BUILD_FOLDER = `./dist`;
const SRC_FOLDER = './src';

export const path = {
  build: {
    img: `${BUILD_FOLDER}/img/`,
    js: `${BUILD_FOLDER}/js/`,
    css: `${BUILD_FOLDER}/styles/`,
    html: `${BUILD_FOLDER}/`,
    files: `${BUILD_FOLDER}/files/`,
    fonts: `${BUILD_FOLDER}/fonts/`,
    icons: `${BUILD_FOLDER}/icons/`,
  },
  src: {
    img: `${SRC_FOLDER}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${SRC_FOLDER}/img/**/*.svg`,
    js: `${SRC_FOLDER}/js/*.js`,
    scss: `${SRC_FOLDER}/styles/*.scss`,
    html: `${SRC_FOLDER}/*.html`,
    files: `${SRC_FOLDER}/files/**/*.*`,
    icons: `${SRC_FOLDER}/icons/*.svg`,
  },
  watch: {
    img: `${SRC_FOLDER}/img/**/*.*`,
    js: `${SRC_FOLDER}/js/**/*.js`,
    scss: `${SRC_FOLDER}/styles/**/*.scss`,
    html: `${SRC_FOLDER}/**/*.html`,
    files: `${SRC_FOLDER}/files/**/*.*`,
    icons: `${SRC_FOLDER}/icons/*.svg`,
  },
  clean: BUILD_FOLDER,
  srcFolder: SRC_FOLDER,
  rootFolder: ROOT_FOLDER,
  ftp: ``,
};
