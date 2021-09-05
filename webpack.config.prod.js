const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    // entry and bundling settings
    mode: 'production',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),  /* should match your tsconfig's "outDir" property */
    },
    devtool: 'none',
    module: {
        rules: [  //can add all your rules for handling different types of files
            {
                test: /\.ts$/,  	// all files ending in .ts
                use: 'ts-loader',  // this replaces the tsc compiler and uses your tsconfig.json file
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
		new CleanPlugin.CleanWebpackPlugin()
	]
}
