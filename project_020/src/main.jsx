import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from './features/user.js'
import themeReducer from './features/theme.js'

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer
  },
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <App />
  </Provider>
)
