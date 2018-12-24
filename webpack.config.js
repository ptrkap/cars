module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: 'bundle.js'
	},
	module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {loader: 'babel-loader'}
        },{
            test: /\.(png|jpg|)$/,
            loader: 'url-loader?limit=200000'
        },{			
			test:/\.css$/,
			use:['style-loader','css-loader']
		},{
			test: /\.less$/,
			use: [
				{
				loader: "style-loader"
				},{
					loader: "css-loader",
					options: {
						sourceMap: true,
						modules: true,
						localIdentName: "[local]___[hash:base64:5]"
					}
				},{
				loader: "less-loader"
				}
			]
        },{
			test: /\.svg$/,
			use: {loader: 'file-loader'}
		}],
    }
};
