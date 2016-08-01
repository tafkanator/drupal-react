const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const srcPath = path.resolve(__dirname, '..', 'src');
const buildPath = path.resolve(__dirname, '..', 'build');

module.exports = {
	bail: true,
	devtool: 'source-map',
	entry: path.join(srcPath, 'index'),
	output: {
		path: buildPath,
		filename: '[name].[chunkhash:8].js',
		chunkFilename: '[name].[chunkhash:8].chunk.js',
		publicPath: '/',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: path.resolve(__dirname, 'node_modules'),
			loader: 'babel-loader',
		}, {
			test: /\.scss/,
			loader: ExtractTextPlugin.extract(
				'style', ['css?minimize&-autoprefixer', 'postcss', 'sass']
			),
			exclude: path.resolve(__dirname, 'node_modules'),
		}, {
			test: /\.(jpg|jpeg|gif|png|svg|woff|woff2)$/,
			loader: `url?limit=1000000000&name=[path][name].[ext]&context=${__dirname}`,
			exclude: path.resolve(__dirname, 'node_modules'),
		}],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, '..', 'index.template.html'),
		}),
		new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new ExtractTextPlugin('[name].[contenthash:8].css'),
	],

	postcss: () => [autoprefixer],
};
