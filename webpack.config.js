import path from 'path';
import webpack from 'webpack';

export const DEV_ENV = 'development';
export const PROD_ENV = 'production';
export const TEST_ENV = 'testing';

// We generate a webpack config for each environment

const plugins = (env) => {
  const result = [
    new webpack.optimize.OccurenceOrderPlugin()
  ];

  switch (env) {
    case PROD_ENV:
      break;
    case DEV_ENV:
      result.push(new webpack.HotModuleReplacementPlugin());
      break;
  }

  return result;
};

const entry = (env) => {
  const result = [];

  if (env === DEV_ENV) {
    result.push('webpack-hot-middleware/client');
  }
  result.push('./index');

  return result;
};

const loaders = (env) => {
  // TODO (asn): define prod loaders
  const result = [{
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
  ];

  return result;
};

function getConfig(env) {
  return {
    devtool: 'cheap-module-eval-source-map',
    entry: entry(env),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    plugins: plugins(env),
    context: path.join(__dirname, 'src'),
    resolve: {
      root: [
        __dirname,
        path.join(__dirname, 'src'),
        path.join(__dirname, 'node_modules')
      ]
    },
    module: {
      loaders: loaders(env)
    }
  };
}

export default getConfig;
