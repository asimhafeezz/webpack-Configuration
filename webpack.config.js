module.exports = {
    entry: './src/app.js',
    output:{
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer:{
        inline: true,
        port: 3500
    },
    module:{
        rules:[
            {
                test: /\.css$/,loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use:[
                    {
                        loader:'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        ]
    }
}