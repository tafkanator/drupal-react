const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000',
		'webpack/hot/dev-server',
		'./src/index.js',
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: path.resolve(__dirname, 'node_modules'),
			loader: 'babel-loader',
		}, {
			test: /\.scss/,
			loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
			exclude: path.resolve(__dirname, 'node_modules'),
		}, {
			test: /\.(jpg|jpeg|gif|png|svg|ico|woff|woff2)$/,
			loader: `url?limit=1000000000&name=[path][name].[ext]&context=${__dirname}`,
			exclude: path.resolve(__dirname, 'node_modules'),
		}, {
			test: /\.html$/,
			loader: 'html-loader',
			exclude: path.resolve(__dirname, 'node_modules'),
		}],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
};