const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


const isDevelopment = process.env.NODE_ENV == 'development';
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    // Entry file of the application
    entry: path.resolve(__dirname, 'src', 'index.jsx'),

    // Output webpack file:
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    // Reads jsx and js files
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        hot: true,
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.jsx$/, // tests file for jsx extension
                exclude: /node_modules/, // excluding the void
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }

                }// Babel, come translate my code
            },
            {
                test: /\.sass$/, // tests file for css extension
                exclude: /node_modules/, // excluding the void
                use: ['style-loader', 'css-loader', 'sass-loader'] // Uses both loaders on css files
            }]
    }


}