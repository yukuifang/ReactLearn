const path = require('path')

module.exports = {
    target: 'node',
    entry:{
        app:path.join(__dirname,'../client/server-entry.js')
    },
    output:{
        //无缓存概念 无需[name].[hash].js
        filename:'server-entry.js',
        path:path.join(__dirname,'../dist'),
        publicPath:'/public',
        libraryTarget: "commonjs2" //方案，使用node环境,打包出来的东西符合commonjs2规范
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                loader:'babel-loader',

            },
            {
                test: /.js$/,
                loader:'babel-loader',
                exclude:[
                    path.resolve(__dirname,'../node_modules')
                ]

            }


        ]
    },


}