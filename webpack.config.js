const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        shared: path.resolve(__dirname, 'src/js/index.js'),
        page1: {
            import: path.resolve(__dirname, 'src/js/page1.js'),
            dependOn: 'shared',
        },
        page2: {
            import: path.resolve(__dirname, 'src/js/page2.js'),
            dependOn: 'shared',
        },
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/page1.html",
            filename: `page1.html`,
            chunks: ['shared', 'page1'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/page2.html",
            filename: `page2.html`,
            chunks: ['shared', 'page2'],
        }),
    ],
};
