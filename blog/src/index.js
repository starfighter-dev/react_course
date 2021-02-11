import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore( reducers, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)