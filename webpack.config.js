const path = require('path');

module.exports = {
    // entry and bundling settings
    mode: 'development',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),  /* should match your tsconfig's "outDir" property */
        publicPath: 'dist'
    },
    devtool: 'inline-source-map',
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
    }
}
