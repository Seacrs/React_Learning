import { createRoot } from 'react-dom/client'
import App from './App'
import ThemeProvider from './provider/ThemeProvider'
import BrandProvider from './provider/BrandProvider'

const root = createRoot(document.querySelector('#root'))

root.render(
  <ThemeProvider>
    <BrandProvider>
      <App />
    </BrandProvider>
  </ThemeProvider>
)