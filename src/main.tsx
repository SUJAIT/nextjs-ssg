import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/route.tsx'
import { store } from './redux/store.ts'
import { ThemeProvider } from './theme-mode-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
  <Provider store={store}>
    <RouterProvider router={routes}/>
  </Provider>
  </ThemeProvider>
  </StrictMode>,
)
