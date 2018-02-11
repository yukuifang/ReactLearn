const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV  === 'development'


const config  = {
    entry:{
        app:path.join(__dirname,'../client/app.js')
    },
    output:{
        filename:'[name].[hash].js',
        path:path.join(__dirname,'../dist'),
        publicPath:'/public/'
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                loader:'babel-loader',

            },
            {
                test: /js$/,
                loader:'babel-loader',
                exclude:[
                    path.resolve(__dirname,'../node_modules')
                ]

            }


        ]
    },
    plugins: [

        new HTMLPlugin(
            {
                template:path.join(__dirname,'../client/template.html')
            }
        )

    ]

}

if(isDev){   // 记住要把之前build:client 编译生成的dist目录删除
    config.devServer = {
        host:'0.0.0.0',
        port:8886,
        contentBase:path.join(__dirname,'../dist'),
        hot:true,
        overlay:{
            error:true
        },
        publicPath:'/public/',
        historyApiFallback:{
            index:'/public/index.html'
        }
    }
    config.entry = {
        app:[
            "react-hot-loader/patch",
             path.join(__dirname,'../client/app.js')
        ]
    }
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config

