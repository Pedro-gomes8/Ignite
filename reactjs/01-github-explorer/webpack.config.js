const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/, // tests file for jsx extension
                exclude: /node_modules/, // excluding the void
                use: 'babel-loader' // Babel, come translate my code
            },
            {
                test: /\.css$/, // tests file for css extension
                exclude: /node_modules/, // excluding the void
                use: ['style-loader', 'css-loader'] // Uses both loaders on css files
            }]
    }


}