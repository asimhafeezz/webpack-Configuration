const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin')

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
                test: /\.css$/,
                use:[
                    'style-loader',    
                    {
                        loader: 'css-loader',
                        options:{
                            minimize: true
                        }
                    }]
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
    },
    plugins:[
        new BabiliPlugin(),
        new CleanWebpackPlugin()
    ]
}