const dotenv = require('dotenv');
const config = Object.assign({},
    dotenv.config({ path: '.env' }).parsed || {},
    dotenv.config({ path: '.env.local' }).parsed || {});

const webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isProduct = config.NODE_ENV == 'production';

module.exports = {
    css: {
        sourceMap: !isProduct,
        loaderOptions: {
            stylus: {
                preferPathResolver: 'webpack',
            },
        },
    },
    configureWebpack: {
        devServer: {
            host: '0.0.0.0',
            disableHostCheck: true,
        },

        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
            },
            mainFields: ['browser', 'main', 'module'],
        },

        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: `"${config.NODE_ENV}"`,
                    NODE_ENABLE_PWA: `${config.NODE_ENABLE_PWA}`,
                },
            }),
        ],

        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    sourceMap: !isProduct,
                    uglifyOptions: {
                        ecma: 8,
                        compress: {
                            warnings: false,
                        },
                    },
                }),
            ],
        },

        devtool: isProduct ? false : '#source-map',
    }
};
