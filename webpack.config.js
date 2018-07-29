let {
  resolve
} = require('path')
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'none',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    }]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          keep_classnames: true,
          keep_fnames: true,
          mangle: false
        },
      }),
    ],
  }
}