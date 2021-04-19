const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const env = process.env.NODE_ENV;

module.exports = {
  entry: './src/index.js',

  mode: env,

  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/[name].bundle.js',
    publicPath: '/'
  },

  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'public'),
        watch: true,
      }
    ],
    port: 5000
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          env == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: path.resolve(__dirname, './node_modules/bootstrap-icons/font/fonts'),
        use: {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'webfonts',
                publicPath: '../webfonts',
            },
        }
      },
      {
        test: /\.(png|jpe?g)$/,
        use: [
          {
            loader: "file-loader",
            options: {
                name: '[name][contenthash:4].[ext]',
                outputPath: 'images'
            }
        },
        {
            loader: "image-webpack-loader",
            options: {
                mozjpeg: {
                    quality: 100,
                    progressive: true
                }
            }

        }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/about.html',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/contact.html',
      filename: 'contact.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/products.html',
      filename: 'products.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/login.html',
      filename: 'login.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/account.html',
      filename: 'account.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/whitechair1.html',
      filename: 'whitechair1.html'
    }),
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery"
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyPlugin({
      patterns: [
          { from: 'src/assets/images', to: 'images' }
      ]
  }),

  ]
};
