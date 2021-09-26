const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
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
        contentBase: path.resolve(__dirname, 'public')
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
            }
        ]
    }


}