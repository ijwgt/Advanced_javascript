const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		clean: true,
	},
	module: {
		rules: [{
			test: /\.txt$/,
			loader: 'raw-loader'
			},
			{
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader'],
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'main.html'
		}),
		new MiniCssExtractPlugin(),
	]
}