const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          { loader: 'url-loader', options: {limit: 1024} },
        ],
      },
      {
        test: /\.md$/,
        use: [
          'html-loader',
          // 直接使用相对路径
          {
            loader: './loaders/markdown-loader.js',
            options: {
              name: 'md-loader',
              minimize: true,
            }
          },
        ],
        // use: [
        //   'html-loader',
        //   './loaders/markdown-loader.js'
        // ],
      },
    ],
  }
}
