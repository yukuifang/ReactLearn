const express = require('express')

const reactSSR  = require ('react-dom/server')

const serverEntry = require('../dist/server-entry.js').default

const app = express()


app.get('*',function (req,res) {
    const  appString = reactSSR.renderToString(serverEntry)
    res.send(appString)

})

app.listen(7777,function () {
    console.log('the server is listen on 7777')
})



