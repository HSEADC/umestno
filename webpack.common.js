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
    page: './src/page.jsx',
    cards: './src/cardsJs/flip2.js'
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

    // 404 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/404.html',
      filename: './404.html',
      chunk: ['index']
    }),

    // 400 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/400.html',
      filename: './400.html',
      chunk: ['index']
    }),

    // 505 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/505.html',
      filename: './505.html',
      chunk: ['index']
    }),


    // About page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/about.html',
      filename: './about.html',
      chunk: ['index']
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
      chunk: ['index']
    }),
    // guides page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/guides.html',
      filename: './media/guides.html',
      chunk: ['index']
    }),
    // influensers page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers.html',
      filename: './media/influensers.html',
      chunk: ['index']
    }),
    // films page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films.html',
      filename: './media/films.html',
      chunk: ['index']
    }),

   // Cards page
    new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/cards.html',
    filename: './cards.html',
    chunk: ['index', 'flip2', 'cards']
  }),


    // Film1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/film1.html',
      filename: './media/films/film1.html',
      chunk: ['index']
    }),
    // Film2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/film2.html',
      filename: './media/films/film2.html',
      chunk: ['index']
    }),
    // Film3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/film3.html',
      filename: './media/films/film3.html',
      chunk: ['index']
    }),
    // Film4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/film4.html',
      filename: './media/films/film4.html',
      chunk: ['index']
    }),
    // Film5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/film5.html',
      filename: './media/films/film5.html',
      chunk: ['index']
    }),
    // Film6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/films/film6.html',
      filename: './media/films/film6.html',
      chunk: ['index']
    }),

    //influensers
    // influensers1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/inf1.html',
      filename: './media/influensers/inf1.html',
      chunk: ['index']
    }),

    // influensers2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/inf2.html',
      filename: './media/influensers/inf2.html',
      chunk: ['index']
    }),

    // influensers3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/inf3.html',
      filename: './media/influensers/inf3.html',
      chunk: ['index']
    }),

    // influensers4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/inf4.html',
      filename: './media/influensers/inf4.html',
      chunk: ['index']
    }),

    // influensers5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/inf5.html',
      filename: './media/influensers/inf5.html',
      chunk: ['index']
    }),

    // influensers6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/influensers/inf6.html',
      filename: './media/influensers/inf6.html',
      chunk: ['index']
    }),


  //Antietiquette

  // article1
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/media/antietiquette/artic1.html',
    filename: './media/antietiquette/artic1.html',
    chunk: ['index']
  }),
  // article2
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/media/antietiquette/artic2.html',
    filename: './media/antietiquette/artic2.html',
    chunk: ['index']
  }),
    // article3
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/media/antietiquette/artic3.html',
      filename: './media/antietiquette/artic3.html',
      chunk: ['index']
    }),
        // article4
        new HtmlWebpackPlugin({
          hash: true,
          scriptLoading: 'blocking',
          template: './src/media/antietiquette/artic4.html',
          filename: './media/antietiquette/artic4.html',
          chunk: ['index']
        }),
        // article5
        new HtmlWebpackPlugin({
          hash: true,
          scriptLoading: 'blocking',
          template: './src/media/antietiquette/artic5.html',
          filename: './media/antietiquette/artic5.html',
          chunk: ['index']
        }),

        // article6
        new HtmlWebpackPlugin({
          hash: true,
          scriptLoading: 'blocking',
          template: './src/media/antietiquette/artic6.html',
          filename: './media/antietiquette/artic6.html',
          chunk: ['index']
        }),


        //Guides

        //guide 1
        new HtmlWebpackPlugin({
          hash: true,
          scriptLoading: 'blocking',
          template: './src/media/guides/guid1.html',
          filename: './media/guides/guid1.html',
          chunk: ['index']
        }), 
        //guide 2
        new HtmlWebpackPlugin({
          hash: true,
          scriptLoading: 'blocking',
          template: './src/media/guides/guid2.html',
          filename: './media/guides/guid2.html',
          chunk: ['index']
        }),   
        //guide 3
        new HtmlWebpackPlugin({
          hash: true,
          scriptLoading: 'blocking',
          template: './src/media/guides/guid3.html',
          filename: './media/guides/guid3.html',
          chunk: ['index']
        }),   
        //guide 4
        new HtmlWebpackPlugin({
          hash: true,
          scriptLoading: 'blocking',
          template: './src/media/guides/guid4.html',
          filename: './media/guides/guid4.html',
          chunk: ['index']
        }),              
        //guide 5
        new HtmlWebpackPlugin({
          hash: true,
          scriptLoading: 'blocking',
          template: './src/media/guides/guid5.html',
          filename: './media/guides/guid5.html',
          chunk: ['index']
        }),  
        //guide 6
        new HtmlWebpackPlugin({
          hash: true,
          scriptLoading: 'blocking',
          template: './src/media/guides/guid6.html',
          filename: './media/guides/guid6.html',
          chunk: ['index']
        }),  
        //guide 7
        new HtmlWebpackPlugin({
          hash: true,
          scriptLoading: 'blocking',
          template: './src/media/guides/guid7.html',
          filename: './media/guides/guid7.html',
          chunk: ['index']
        }),  

    // Tests

    // Main tests page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests_main.html',
      filename: './tests_main.html',
      chunks: ['index']
    }),

    // Test1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test1.html',
      filename: './tests/test1.html',
      chunks: ['index', 'test1']
    }),
    // Test2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test2.html',
      filename: './tests/test2.html',
      chunks: ['index', 'test2']
    }),
    // Test3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test3.html',
      filename: './tests/test3.html',
      chunks: ['index', 'test3']
    }),
    // Test4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test4.html',
      filename: './tests/test4.html',
      chunks: ['index', 'test4']
    }),
    // Test5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test5.html',
      filename: './tests/test5.html',
      chunks: ['index', 'test5']
    }),
    // Test6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test6.html',
      filename: './tests/test6.html',
      chunks: ['index', 'test6']
    }),
    // Test7 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test7.html',
      filename: './tests/test7.html',
      chunks: ['index', 'test7']
    }),
    // Test8 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test8.html',
      filename: './tests/test8.html',
      chunks: ['index', 'test8']
    }),
    // Test9 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tests/test9.html',
      filename: './tests/test9.html',
      chunks: ['index', 'test9']
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
