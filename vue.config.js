const dotenv = require('dotenv');
const env = Object.assign({},
    dotenv.config({ path: '.env' }).parsed || {},
    dotenv.config({ path: '.env.local' }).parsed || {});
env.NODE_ENV = (env.NODE_ENV === 'production')
    ? env.NODE_ENV
    : process.env.NODE_ENV;
console.log('NODE_ENV:', env.NODE_ENV);

const webpack = require('webpack');

const isProduct = env.NODE_ENV == 'production';

module.exports = {
    publicPath: './',

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
                    NODE_ENV: `"${env.NODE_ENV}"`,
                    NODE_ENABLE_PWA: `${env.NODE_ENABLE_PWA}`,
                },
            }),
        ],

        devtool: isProduct ? false : '#source-map',
    }
};
