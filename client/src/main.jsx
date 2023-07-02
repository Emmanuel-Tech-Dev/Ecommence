import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {persistor, store} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { ToggleProvider } from '../WishlistContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <PersistGate loading={'loading'} persistor={persistor}>
       <ToggleProvider>
         <App />
       </ToggleProvider>
     </PersistGate> 
    </Provider>
    
  </React.StrictMode>,
)
