var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(ROOT_PATH, 'app/src')
    ],
    output: {
        path: path.join(ROOT_PATH, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Adivinate',
            template: path.join(__dirname, 'app/src/index.tmpl.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'app') },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap', include: path.join(__dirname, 'app/styles')},
            { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap', include: path.join(__dirname, 'app/styles')},
            { test: /\.(jpg|woff)$/, loader: 'url?limit=100000'},
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            { test: /\.json$/, loader: 'json'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css', '.scss']
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ]
};