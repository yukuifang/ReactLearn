const express = require('express')

const reactSSR  = require ('react-dom/server')

const serverEntry = require('../dist/server-entry.js').default

const fs = require('fs')

const path = require('path')

const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8')

const app = express()

app.use('/public',express.static(path.join(__dirname,'../dist')))

app.get('*',function (req,res) {
    const  appString = reactSSR.renderToString(serverEntry)

    res.send(template.replace('<!-- app -->',appString))

})

app.listen(8887,function () {
    console.log('the server is listen on 8887')
})



