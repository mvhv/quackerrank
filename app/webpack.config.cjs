const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname , 'dist'),
        publicPath: "public",
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use:'babel-loader'},
            {test: /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development',
    plugins: [
        new HtmlWebpackPlugin ({
            template: './src/main.html',
            filename: 'main.html'
        })
    ]
};