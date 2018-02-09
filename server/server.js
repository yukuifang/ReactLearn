const express = require('express')

const reactSSR  = require ('react-dom/server')

const serverEntry = require('../client/server-entry')

const app = express()


app.get('*',function (req,res) {
    const  appString = reactSSR.render(serverEntry)
    res.send(appString)

})

app.listen(3333,function () {
    console.log('the server is listen on 3333')
})



