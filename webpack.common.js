// Node.js の組み込みモジュール。出力先などを絶対パスで指定するために利用する。
const path = require("path");
// output.path に指定したディレクトリ内のファイルを削除するプラグイン
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// バンドルを読み込んだ HTML を出力するプラグイン
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // エントリーポイント
  entry: "./src/js/app.js",
  // 出力の設定
  output: {
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    path: path.resolve(__dirname, "public"),
    // 出力するファイル名
    filename: "js/bundle.js",
  },
  // プラグインの設定
  plugins: [
    // output.path に指定したディレクトリ（今回は public）内のファイルを削除してからビルドが実行される
    new CleanWebpackPlugin(),
    // バンドルを読み込んだ HTML を出力する
    new HtmlWebpackPlugin({
      // テンプレート
      template: "./src/html/index.html",
    }),
  ],
};
