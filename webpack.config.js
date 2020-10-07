module.exports = {
    entry: './src/app.js',
    output:{
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/ , loader: "babel-loader" , exclude: /node-modules/ , query:{
                    preset:['es2015']
                }
            }
        ]
    }
}