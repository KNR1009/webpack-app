// Node.js の組み込みモジュール。出力先などを絶対パスで指定するために利用する。
const path = require("path");
// output.path に指定したディレクトリ内のファイルを削除するプラグイン
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
    new CleanWebpackPlugin({
      // このサンプルの場合、webpack から出力していない index.html が削除されてしまうのを防ぎたいため、
      // HTML は削除しない。すべてのファイルを削除して良いいのであれば、この設定は不要。
      cleanOnceBeforeBuildPatterns: ["**/*", "!**.html"],
    }),
  ],
};
