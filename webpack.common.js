const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	devtool: 'inline-source-map',
	target: 'web',
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										esmodules: true,
									},
								},
							],
							'@babel/preset-react',
						],
					},
				},
			},
			{
				test: [/\.s[ac]ss$/i, /\.css$/i],
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
	plugins: [new WebpackNotifierPlugin()],
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'build', 'js'),
	},
};
