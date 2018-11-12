const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    HappyPack = require('happypack'),
    os = require('os');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = (env = {}) => {
    const target = env.js ? 'js' : 'src';

    const config = {
        entry: {
            app: `./${target}/index.${env.js ? 'js' : 'tsx'}`
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: `${target}/[name].bundle.js`
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: 'happypack/loader?id=ts'
                },
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                {
                    test: /\.css$/,
                    use: [!env.production ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
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
            }),
            new HappyPack({ // 基础参数设置
                id: 'ts',
                threadPool: happyThreadPool,
                loaders: [
                    {
                        path: 'ts-loader',
                        query: { happyPackMode: true }
                    }
                ]
            })
        ],
        optimization: {
            splitChunks: {
                chunks: 'async',
                minSize: 3000,
                maxSize: 0,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 4,
                name: true,
                cacheGroups: {
                    commons: {
                        name: 'commons',
                        chunks: 'initial',
                        minChunks: 2
                    },
                    tensorflow: {
                        test: /(@tensorflow\/tfjs)/,
                        name: 'tfjs',
                        chunks: 'all'
                    },
                    codemirror: {
                        test: /(codemirror)/,
                        name: 'codemirror',
                        chunks: 'all'
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
        config.optimization.minimize = true;
        config.devtool = false;
        config.plugins.push(new BundleAnalyzerPlugin());
    }

    return config;
}
