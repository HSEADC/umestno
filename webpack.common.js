const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")нфкт

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
    page: './src/page.jsx',
    cards: './src/cardsJs/flip2.js',
    menubar: './src/menubar.jsx',
    search: './src/search-vanilla.js'
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
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/share/"),
          to: path.resolve(__dirname, "dev_build/share/"),
        },
        {
          from: path.resolve(__dirname, "src/share/"),
          to: path.resolve(__dirname, "docs/share/"),
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.ejs',
      filename: './index.html',
      chunk: ['index', 'menubar', 'search']
    }),

    // search page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/search.html',
      filename: './search.html',
      chunk: ['menubar', 'search']
    }),

    // 404 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/404.html',
      filename: './404.html',
      chunk: ['index', 'menubar']
    }),

    // 400 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/400.html',
      filename: './400.html',
      chunk: ['index', 'menubar']
    }),

    // 505 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/505.html',
      filename: './505.html',
      chunk: ['index', 'menubar']
    }),

    // About page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/about.ejs',
      filename: './about.html',
      chunk: ['index', 'menubar']
    }),
    // Burger page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/burger.html',
      filename: './burger.html',
      chunk: ['index']
    }),

    // antietiquette page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette.html',
      filename: './media/antietiquette.html',
      chunk: ['index', 'menubar']
    }),
    // guides page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides.html',
      filename: './media/guides.html',
      chunk: ['index', 'menubar']
    }),
    // influensers page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers.html',
      filename: './media/influensers.html',
      chunk: ['index', 'menubar']
    }),
    // films page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films.ejs',
      filename: './media/films.html',
      chunk: ['index', 'menubar']
    }),

    // Cards page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards.ejs',
      filename: './cards.html',
      chunk: ['index', 'flip2', 'cards', 'menubar']
    }),

    // Film1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/film1.html',
      filename: './media/films/film1.html',
      chunk: ['index', 'menubar']
    }),
    // Film2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/film2.html',
      filename: './media/films/film2.html',
      chunk: ['index', 'menubar']
    }),
    // Film3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/film3.html',
      filename: './media/films/film3.html',
      chunk: ['index', 'menubar']
    }),
    // Film4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/film4.html',
      filename: './media/films/film4.html',
      chunk: ['index', 'menubar']
    }),
    // Film5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/film5.html',
      filename: './media/films/film5.html',
      chunk: ['index', 'menubar']
    }),
    // Film6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/film6.html',
      filename: './media/films/film6.html',
      chunk: ['index', 'menubar']
    }),

    //influensers
    // influensers1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/inf1.html',
      filename: './media/influensers/inf1.html',
      chunk: ['index', 'menubar']
    }),

    // influensers2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/inf2.html',
      filename: './media/influensers/inf2.html',
      chunk: ['index', 'menubar']
    }),

    // influensers3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/inf3.html',
      filename: './media/influensers/inf3.html',
      chunk: ['index', 'menubar']
    }),

    // influensers4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/inf4.html',
      filename: './media/influensers/inf4.html',
      chunk: ['index', 'menubar']
    }),

    // influensers5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/inf5.html',
      filename: './media/influensers/inf5.html',
      chunk: ['index', 'menubar']
    }),

    // influensers6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/inf6.html',
      filename: './media/influensers/inf6.html',
      chunk: ['index', 'menubar']
    }),

    //Antietiquette

    // article1
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette/artic1.html',
      filename: './media/antietiquette/artic1.html',
      chunk: ['index', 'menubar']
    }),
    // article2
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette/artic2.html',
      filename: './media/antietiquette/artic2.html',
      chunk: ['index', 'menubar']
    }),
    // article3
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette/artic3.html',
      filename: './media/antietiquette/artic3.html',
      chunk: ['index', 'menubar']
    }),
    // article4
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette/artic4.html',
      filename: './media/antietiquette/artic4.html',
      chunk: ['index', 'menubar']
    }),
    // article5
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette/artic5.html',
      filename: './media/antietiquette/artic5.html',
      chunk: ['index', 'menubar']
    }),

    // article6
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette/artic6.html',
      filename: './media/antietiquette/artic6.html',
      chunk: ['index', 'menubar']
    }),

    //Guides

    //guide 1
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/guid1.html',
      filename: './media/guides/guid1.html',
      chunk: ['index', 'menubar']
    }),
    //guide 2
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/guid2.html',
      filename: './media/guides/guid2.html',
      chunk: ['index', 'menubar']
    }),
    //guide 3
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/guid3.html',
      filename: './media/guides/guid3.html',
      chunk: ['index', 'menubar']
    }),
    //guide 4
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/guid4.html',
      filename: './media/guides/guid4.html',
      chunk: ['index', 'menubar']
    }),
    //guide 5
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/guid5.html',
      filename: './media/guides/guid5.html',
      chunk: ['index', 'menubar']
    }),
    //guide 6
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/guid6.html',
      filename: './media/guides/guid6.html',
      chunk: ['index', 'menubar']
    }),
    //guide 7
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/guid7.html',
      filename: './media/guides/guid7.html',
      chunk: ['index', 'menubar']
    }),

    // Tests

    // Main tests page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests_main.ejs',
      filename: './tests_main.html',
      chunks: ['index', 'menubar']
    }),

    // Test1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test1.html',
      filename: './tests/test1.html',
      chunks: ['index', 'test1', 'menubar']
    }),
    // Test2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test2.html',
      filename: './tests/test2.html',
      chunks: ['index', 'test2', 'menubar']
    }),
    // Test3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test3.html',
      filename: './tests/test3.html',
      chunks: ['index', 'test3', 'menubar']
    }),
    // Test4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test4.html',
      filename: './tests/test4.html',
      chunks: ['index', 'test4', 'menubar']
    }),
    // Test5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test5.html',
      filename: './tests/test5.html',
      chunks: ['index', 'test5', 'menubar']
    }),
    // Test6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test6.html',
      filename: './tests/test6.html',
      chunks: ['index', 'test6', 'menubar']
    }),
    // Test7 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test7.html',
      filename: './tests/test7.html',
      chunks: ['index', 'test7', 'menubar']
    }),
    // Test8 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test8.html',
      filename: './tests/test8.html',
      chunks: ['index', 'test8', 'menubar']
    }),
    // Test9 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test9.html',
      filename: './tests/test9.html',
      chunks: ['index', 'test9', 'menubar']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/menubar.html'),
        location: 'menubar',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footer',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
