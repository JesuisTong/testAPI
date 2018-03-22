var path = require('path')
var os = require('os');
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var onBuildWebpack = require('on-build-webpack');
var notifier = require('node-notifier');

var config = {
  entry: './src/main.js',
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
  node: {
    __filename: true,
    __dirname: true
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      'modules': '/src/modules'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  externals: {
    $: "window.$"
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
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
    })
  ],
  performance: {
    hints: false
  },
  devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'inline-source-map';
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}


module.exports = config;