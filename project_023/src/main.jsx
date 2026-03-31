import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TodoProvider from './provider/TodoProvider'

createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>
)
