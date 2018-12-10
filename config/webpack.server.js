const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, "../assets"),
		compress: true,
		port: 3333,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(
				__dirname,
				"../app/template/index.html"
			),
		})
	],
});