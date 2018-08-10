const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const path = require('path');

module.exports = merge(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 8080,
        proxy: {
            "/getS": {
                target: "http://comments.baofeng.net",
                changeOrigin: true
            }
        }
    }
});