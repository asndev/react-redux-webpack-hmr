import path from 'path';
import webpack from 'webpack';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  context: path.join(__dirname, 'src'),
  resolve: {
    root: [
      __dirname,
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ]
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }, {
        test: /\.scss$/,
        loader: "style-loader!css-loader?modules&localIdentName=[local]__[hash:base64:5]!sass-loader?includePaths[]=" +
            encodeURIComponent(path.resolve(__dirname, 'src'))
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
