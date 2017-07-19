'use strict';

var PACKAGE = require('./package.json');

// https://github.com/frontainer/frontplate-cli/wiki/6.%E8%A8%AD%E5%AE%9A
module.exports = function (production) {
  global.THEME_NAME = 'sampletheme';
  global.FRP_SRC  = 'src/' + THEME_NAME;
  global.FRP_DEST = 'wp/wp-content/themes/' + THEME_NAME;
  return {
    clean: {
    },
    html: {
      src: `${FRP_SRC}/view/*.{ejs,svg,html,php,css}`,   // 読み込むビューファイル
      dest: FRP_DEST,        // 出力先
      params: {                   // ビューで使うグローバル変数
        name: PACKAGE.name,
        version: PACKAGE.version
      },
      ext: null,        // 出力する際の拡張子
      // １つのテンプレートで複数作成するときに使用する
      // pages: [
      //   {
      //       name: 'style.css',    // 出力するファイル名
      //       src: `${FRP_SRC}/view/style.css`,  // テンプレート
      //     ext: '.css',
      //       params: {       // ページに渡す変数
      //           version: PACKAGE.version
      //       }
      //   }
      // ],
    },
    style: production ? {} : {},
    script: production ? {} : {},
    server: {
      proxy: 'localhost'
    },
    copy: {
      [`${FRP_SRC}/view/inc/*`]: `${FRP_DEST}/inc/`
    },
    sprite: [],
    test: {}
  }
};
