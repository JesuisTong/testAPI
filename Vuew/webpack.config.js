var path = require('path')
var os = require('os');
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var onBuildWebpack = require('on-build-webpack');
var notifier = require('node-notifier');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const env = process.env.NODE_ENV;
var config = {
  mode: env,
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:5].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [require('autoprefixer')()],
          loaders: {
            script: 'babel-loader',
            scss: 'vue-style-loader!css-loader!sass-loader',
          },
          esModule: true,
          // other vue-loader options go here
        }
      },
      {
        test: /\.css$/,
        loader: 'vue-style-loader!css-loader!sass-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  optimization: {
    namedChunks: true,
    namedModules: true,
    runtimeChunk: { name: 'manifest' },
    splitChunks: {
      automaticNameDelimiter: '-',
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    },
  },
  node: {
    __filename: true,
    __dirname: true
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, 'src/modules')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  externals: {
    $: "window.$"
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new onBuildWebpack((stats) => {
      const { compilation } = stats;
      const { errors } = compilation;
      if (os.platform() === 'linux') {
        return;
      }
      if (errors.length > 0) {
          const error = errors[0];
          notifier.notify({ title: error.name, message: error.message, sound: true })
      } else {
          const warningNumber = compilation.warnings.length;
          notifier.notify({
            title: 'job done',
            message: `cost ${stats.endTime - stats.startTime} ms, ${warningNumber} warning(s)`
          });
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      cache: true,
    }),
    process.env.isAnalyze && new BundleAnalyzerPlugin(),
  ].filter(i => i),
  performance: {
    hints: false
  },
  devtool: 'eval-source-map'
}

module.exports = config;