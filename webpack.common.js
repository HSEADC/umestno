const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    test1: './src/testsJs/test1.js',
    test2: './src/testsJs/test2.js',
    test3: './src/testsJs/test3.js',
    test4: './src/testsJs/test4.js',
    test5: './src/testsJs/test5.js',
    test6: './src/testsJs/test6.js',
    test7: './src/testsJs/test7.js',
    test8: './src/testsJs/test8.js',
    test9: './src/testsJs/test9.js',
    page: './src/page.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src/share/"),
    //       to: path.resolve(__dirname, "dev_build/share/"),
    //     },
    //     {
    //       from: path.resolve(__dirname, "src/share/"),
    //       to: path.resolve(__dirname, "docs/share/"),
    //     },
    //   ],
    // }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunk: ['index']
    }),
    // Film1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/film1.html',
      filename: './media/films/film1.html',
      chunk: ['index']
    }),

    // Tests

    // Test1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test1.html',
      filename: './tests/test1.html',
      chunk: ['index', 'test1']
    }),
    // Test2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test2.html',
      filename: './tests/test2.html',
      chunk: ['index', 'test2']
    }),
    // Test3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test3.html',
      filename: './tests/test3.html',
      chunk: ['index', 'test3']
    }),
    // Test4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test4.html',
      filename: './tests/test4.html',
      chunk: ['index', 'test4']
    }),
    // Test5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test5.html',
      filename: './tests/test5.html',
      chunk: ['index', 'test5']
    }),
    // Test6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test6.html',
      filename: './tests/test6.html',
      chunk: ['index', 'test6']
    }),
    // Test7 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test7.html',
      filename: './tests/test7.html',
      chunk: ['index', 'test7']
    }),
    // Test8 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test8.html',
      filename: './tests/test8.html',
      chunk: ['index', 'test8']
    }),
    // Test9 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test9.html',
      filename: './tests/test9.html',
      chunk: ['index', 'test9']
    }),



    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
