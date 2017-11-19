import express from 'express';
import path from 'path';

// Hot Reloading
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.dev.js'

let app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

//app.use('/src', express.static(path.join(__dirname, '/src')));
app.use('/dist', express.static(path.join(__dirname, '/dist')));
app.use('/css', express.static(path.join(__dirname, '/public/css')));

app.get('/*', ( req,res )=> {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

const port = process.env.PORT || 3000;
let server = app.listen(port, () => console.log('Server at: ' + server.address().port));
