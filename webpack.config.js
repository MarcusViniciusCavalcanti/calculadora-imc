const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'app-bundle.js'
    },
    modules: {
        rules: [
            { test: /\.js$/, exclude: /(node_modules)/, use: 'babel-loader' },
            { test: /\.s?css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    mode: 'development',
    resolver: { extentions: ['*', '.js'] },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist'
    }
}

