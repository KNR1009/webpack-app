// 設定をマージする関数
const { merge } = require("webpack-merge");
// 共通設定を読み込む
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  mode: "development",
  watch: true,
  devtool: "cheap-module-eval-source-map",
});
