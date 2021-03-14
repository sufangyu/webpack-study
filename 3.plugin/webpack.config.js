const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const RemoveCommentsPlugin = require('./plugins/remove-comments-plugin')
const SetScriptTimestampPlugin = require('./plugins/set-script-timestamp-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample',
      template: './index.html'
    }),
    // // 用于生成 about.html
    // new HtmlWebpackPlugin({
    //   filename: 'about.html'
    // })
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: './public' },
      ],
    }),
	  new RemoveCommentsPlugin(),
	  new SetScriptTimestampPlugin(),
  ],
}
