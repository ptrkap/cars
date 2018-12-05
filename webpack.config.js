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
			test: /\.svg$/,
			use: {loader: 'file-loader'}
		}],
    }
};
