const { join, resolve } = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const notifier = require('node-notifier');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
module.exports = {
  output: {
    publicPath: '/',
    filename: 'scripts/[name].bundule.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: join(__dirname, '../dist'),
    proxy: {
      '/api': 'http://localhost:3000',
    },
    hot: true,
    quiet: true,
    port: 3000,
  },

  plugins: [
    // new BundleAnalyzerPlugin(),
    // new Jarvis({
    //   port: 1337
    // }),
    new WebpackBuildNotifierPlugin({
      title: 'project',
      suppressSuccess: true,
    }),
    new HtmlWebpackPlugin({
      title: 'react-generator',
      filename: 'index.html',
      template: resolve(__dirname, '../src/web/index-dev.html'),
    }),
    // new FriendlyErrorsWebpackPlugin({
    //   compilationSuccessInfo: {
    //     messages: ['You application is running here http://localhost:3000'],
    //     notes: ['构建信息请及时关注窗口右上角'],
    //   },
    //   onErrors: function (severity, errors) {
    //     if (severity !== 'error') {
    //       return;
    //     }
    //     const error = errors[0];
    //     // console.log(error);
    //     notifier.notify({
    //       title: 'Webpack构建失败',
    //       message: severity + ': ' + error.name,
    //       subtitle: error.file || '',
    //     });
    //   },
    // }),
  ],
};
