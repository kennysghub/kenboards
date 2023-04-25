const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 
module.exports = {
    // Takes the src files, pass them through all of the presets and loaders and create an ouptut file that will actually load in the browser 
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
        }),
    ],
    devServer: {
        port: 8080,
        hot: true,
        open: true,

    },
    // Compiling? 
    module: {
        rules: [
            {   // JS/JSX files 
                test: /\.(js|jsx)$/,
                // They should already be compiled and ready to use 
                exclude: /node_modules/,
                // What do you want to do once we find those files?
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.scss/,
                // Use several loaders because several things happenign to scss 
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}