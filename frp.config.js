'use strict';
// https://github.com/frontainer/frontplate-cli/wiki/6.%E8%A8%AD%E5%AE%9A
module.exports = function (production) {
  global.THEME_NAME = 'sampletheme';
  global.FRP_SRC  = 'src/' + THEME_NAME;
  global.FRP_DEST = 'wp/wp-content/themes/' + THEME_NAME;
  return {
    clean: {
    },
    html: {
      src: `${FRP_SRC}/view/*.{ejs,svg,html,php}`,   // 読み込むビューファイル
      dest: FRP_DEST,        // 出力先
      params: {                   // ビューで使うグローバル変数
        title: 'title'
      },
      ext: '.php',        // 出力する際の拡張子
      // １つのテンプレートで複数作成するときに使用する
      pages: [
        // {
        //     name: 'filename',    // 出力するファイル名
        //     src: `${FRP_SRC}/view/tmpl/_template.ejs`,  // テンプレート
        //     params: {       // ページに渡す変数
        //         title: 'page title'
        //     }
        // }
      ],
    },
    style: production ? {} : {},
    script: production ? {} : {},
    server: {
      proxy: 'localhost'
    },
    copy: {
      [`${FRP_SRC}/php/**/*`]: `${FRP_DEST}/`
    },
    sprite: [],
    test: {}
  }
};
