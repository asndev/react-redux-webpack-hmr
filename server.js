import webpack from 'webpack';
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
import configBuilder, { DEV_ENV } from './webpack.config';

const app = new (require('express'))();
const port = 3000;
const config = configBuilder(DEV_ENV);

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("http://localhost:%s/ in your browser.", port);
  }
});
