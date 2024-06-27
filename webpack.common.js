const SitemapPlugin = require('sitemap-webpack-plugin').default
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

const paths = [
  '/',
  'media/films.html',
  'cards.html',
  'about.html',
  'tests_main.html'
]

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
    flip2: './src/cardsJs/flip2.js',
    cards: './src/javascript/cards.js',
    menubar: './src/menubar.jsx',
    burgerMenu: './src/javascript/burgerMenu.js',
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
    new SitemapPlugin({ base: 'https://mysite.com', paths }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'dev_build/share/')
        },
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'docs/share/')
        },
        {
          from: path.resolve(__dirname, 'src/images/'),
          to: path.resolve(__dirname, 'dev_build/images/')
        },
        {
          from: path.resolve(__dirname, 'src/images/'),
          to: path.resolve(__dirname, 'docs/images/')
        }
      ]
    }),

    new MiniCssExtractPlugin({
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.ejs',
      filename: './index.html',
      chunks: ['index', 'menubar', 'search', 'burgerMenu']
    }),

    // search page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/search.html',
      filename: './search.html',
      chunks: ['menubar', 'search']
    }),

    // 404 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/404.html',
      filename: './404.html',
      chunks: ['index', 'menubar']
    }),

    // 400 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/400.html',
      filename: './400.html',
      chunks: ['index', 'menubar']
    }),

    // 505 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/505.html',
      filename: './505.html',
      chunks: ['index', 'menubar']
    }),

    // styleguide page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styleguide.html',
      filename: './styleguide.html',
      chunks: ['index']
    }),

    // About page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/about.ejs',
      filename: './about.html',
      chunks: ['index', 'menubar']
    }),

    // Burger page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/burger.ejs',
      filename: './burger.html',
      chunks: ['index']
    }),

    // antietiquette page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette.html',
      filename: './media/antietiquette.html',
      chunks: ['index', 'menubar']
    }),
    // guides page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides.html',
      filename: './media/guides.html',
      chunks: ['index', 'menubar']
    }),
    // influensers page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers.html',
      filename: './media/influensers.html',
      chunks: ['index', 'menubar']
    }),
    // films page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films.ejs',
      filename: './media/films.html',
      chunks: ['index', 'menubar']
    }),

    // Cards page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards.ejs',
      filename: './cards.html',
      chunks: ['index', 'flip2', 'cards', 'menubar']
    }),

    // Film1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/yesMadam.html',
      filename: './media/films/yesMadam.html',
      chunks: ['index', 'menubar']
    }),
    // Film2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/mistakes.html',
      filename: './media/films/mistakes.html',
      chunks: ['index', 'menubar']
    }),
    // Film3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/theCrownShow.html',
      filename: './media/films/theCrownShow.html',
      chunks: ['index', 'menubar']
    }),
    // Film4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/GraceKelly.html',
      filename: './media/films/GraceKelly.html',
      chunks: ['index', 'menubar']
    }),
    // Film5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/Emma.html',
      filename: './media/films/Emma.html',
      chunks: ['index', 'menubar']
    }),
    // Film6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/princessDiaries.html',
      filename: './media/films/princessDiaries.html',
      chunks: ['index', 'menubar']
    }),

    //influensers
    // influensers1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/fallLessons.html',
      filename: './media/influensers/fallLessons.html',
      chunks: ['index', 'menubar']
    }),

    // influensers2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/KateMiddlton.html',
      filename: './media/influensers/KateMiddlton.html',
      chunks: ['index', 'menubar']
    }),

    // influensers3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/QueenElisabeth.html',
      filename: './media/influensers/QueenElisabeth.html',
      chunks: ['index', 'menubar']
    }),

    // influensers4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/underwear.html',
      filename: './media/influensers/underwear.html',
      chunks: ['index', 'menubar']
    }),

    // influensers5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/AnnaVintur.html',
      filename: './media/influensers/AnnaVintur.html',
      chunks: ['index', 'menubar']
    }),

    // influensers6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/impression.html',
      filename: './media/influensers/impression.html',
      chunks: ['index', 'menubar']
    }),

    //Antietiquette

    // article1
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette/taxi.html',
      filename: './media/antietiquette/taxi.html',
      chunks: ['index', 'menubar']
    }),
    // article2
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette/lift.html',
      filename: './media/antietiquette/lift.html',
      chunks: ['index', 'menubar']
    }),
    // article3
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette/handsEating.html',
      filename: './media/antietiquette/handsEating.html',
      chunks: ['index', 'menubar']
    }),
    // article4
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette/sweaty.html',
      filename: './media/antietiquette/sweaty.html',
      chunks: ['index', 'menubar']
    }),
    // article5
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette/needMore.html',
      filename: './media/antietiquette/needMore.html',
      chunks: ['index', 'menubar']
    }),

    // article6
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette/discussions.html',
      filename: './media/antietiquette/discussions.html',
      chunks: ['index', 'menubar']
    }),

    //Guides

    //guide 1
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/phoneTalk.html',
      filename: './media/guides/phoneTalk.html',
      chunks: ['index', 'menubar']
    }),
    //guide 2
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/guestsSitting.html',
      filename: './media/guides/guestsSitting.html',
      chunks: ['index', 'menubar']
    }),
    //guide 3
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/forksAndSpoons.html',
      filename: './media/guides/forksAndSpoons.html',
      chunks: ['index', 'menubar']
    }),
    //guide 4
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/workPlancton.html',
      filename: './media/guides/workPlancton.html',
      chunks: ['index', 'menubar']
    }),
    //guide 5
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/unexpectedGuests.html',
      filename: './media/guides/unexpectedGuests.html',
      chunks: ['index', 'menubar']
    }),
    //guide 6
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/branch.html',
      filename: './media/guides/branch.html',
      chunks: ['index', 'menubar']
    }),
    //guide 7
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides/importantDiscussions.html',
      filename: './media/guides/importantDiscussions.html',
      chunks: ['index', 'menubar']
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
      template: './src/tests/goodHost.html',
      filename: './tests/goodHost.html',
      chunks: ['index', 'test1', 'menubar']
    }),
    // Test2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/sittingProblem.html',
      filename: './tests/sittingProblem.html',
      chunks: ['index', 'test2', 'menubar']
    }),
    // Test3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/whereAreMyShoes.html',
      filename: './tests/whereAreMyShoes.html',
      chunks: ['index', 'test3', 'menubar']
    }),
    // Test4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/suchAFruit.html',
      filename: './tests/suchAFruit.html',
      chunks: ['index', 'test4', 'menubar']
    }),
    // Test5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/interlocutor.html',
      filename: './tests/interlocutor.html',
      chunks: ['index', 'test5', 'menubar']
    }),
    // Test6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/isItAppropriet.html',
      filename: './tests/isItAppropriet.html',
      chunks: ['index', 'test6', 'menubar']
    }),
    // Test7 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/sunglassesProblem.html',
      filename: './tests/sunglassesProblem.html',
      chunks: ['index', 'test7', 'menubar']
    }),
    // Test8 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/howKindAreYou.html',
      filename: './tests/howKindAreYou.html',
      chunks: ['index', 'test8', 'menubar']
    }),
    // Test9 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/SantaClaus.html',
      filename: './tests/SantaClaus.html',
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
