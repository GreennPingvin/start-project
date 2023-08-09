const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development'

module.exports = {
	mode,
	entry : './src/index.js',
	output : {
		filename : '[name].[contenthash].js',
		path : path.resolve(__dirname, 'dist'),
		clean : true
	},
	devServer : {
		port : 3000,
		open : true
	},
	plugins : [new HtmlWebpackPlugin({
		template : path.resolve(__dirname, 'src', 'index.html')
	})]
};