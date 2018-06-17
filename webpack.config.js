const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');


const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    entry: {
        polyfill: 'babel-polyfill',
        app: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'

                    }
                ]
            }, {
                test: /\.(png|jpe?g|gif|ttf|woff|woff2|eot|otf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[hash].js'
    },
    plugins: [htmlPlugin]
};
