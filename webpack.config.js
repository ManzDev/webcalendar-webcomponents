const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = env => {
  return({
    mode: env.MODE,
    entry: './src/index.ts',
    devtool: env.MODE === 'development' ? 'inline-source-map' : 'none',
    devServer: {
      contentBase: './dist'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: false,
            },
          }
        }
      ],
    },
    resolve: {
      extensions: [ '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin([
        { context: 'public', from: '**/*', to: '.' },
        { context: 'src', from: '*.css', to: '.' }
      ]),
      new HtmlWebpackPlugin({
        inject: 'head',
        template: 'src/index.html'
      })
    ]
  })
}