const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin")
;

module.exports = (env = {}) => {
    const config = {
        entry: {
            app: './src/index.tsx',
            vendor: ['react', 'react-dom']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].bundle.js'
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: 'ts-loader'
                },
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                {
                    test: /\.css$/,
                    use: [ !env.production ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ]
                },
                {
                    test: /\.less$/,
                    use: [
                        !env.production ? 'style-loader' : MiniCssExtractPlugin.loader,
                      'css-loader',
                      'postcss-loader',
                      'less-loader',
                    ],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
                    loader: 'file-loader'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
              })
        ],
        optimization: {
            splitChunks: {
              chunks: 'initial',
              minSize: 3000,
              maxSize: 0,
              minChunks: 1,
              maxAsyncRequests: 5,
              maxInitialRequests: 3,
              automaticNameDelimiter: '~',
              name: true,
              cacheGroups: {
                vendors: {
                  test: /[\\/]node_modules[\\/]/,
                  priority: -10
                },
                default: {
                  minChunks: 1,
                  priority: -20,
                  reuseExistingChunk: true
                }
              }
            }
          }
    }
    
    
    // 生产环境，运行npm run build则执行这里
    if (env.production) {
        config.devtool = '#source-map'
        config.optimization.minimize = true,
        config.devtool = false
    }

    return config;
}
