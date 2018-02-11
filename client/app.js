import  React from 'react'

import  $ from 'jquery'

import ReactDOM from 'react-dom'

import App from './app.jsx'

import { AppContainer } from 'react-hot-loader'

const root  = document.getElementById('root')

const render = Component =>{
    ReactDOM.hydrate(
        <AppContainer>
            <Component/>
        </AppContainer>
        ,
        root
    )
}

render(App)

if (module.hot){
    module.hot.accept('./app.jsx',()=>{
        const NewApp = require('./app.jsx').default
        render(NewApp)
    })
}







