var webpack = require('webpack');
var path = require('path');

module.exports = {
    // Number lines for debugging
    devtools : 'inline-source-map',
        //look for entry points, this currently uses web pack dev server
        entry: [
            'webpack-dev-server/client?http://127.0.0.1:8080/',
            'webpack/hot/only-dev-server',
            './src'
        ],
        // Output file, since we are using webpack dev server, there wont actuall y be an output
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        // Look for the files to bundle together
        resolve: {
            modulesDirectories: ['node_modules', 'src'],
            extensions: ['', '.js']
        },
        //accept JSX, use ES6 and 2015
        module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            }, {
			test: /\.json/,
			loader: 'json-loader'
		},  {
			test: /\.scss$/,
			loaders: ['style-loader','css-loader','sass-loader']
		}, {
			test: /\.css$/,
			loaders: ['style?sourceMap','css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]']
		}, {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=100000&mimetype=image/svg+xml'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=100000'
		}]
        },
    //add a reload as you go and a compile only if no errors plugin
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};