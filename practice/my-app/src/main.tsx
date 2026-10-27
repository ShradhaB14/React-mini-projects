// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import "./index.css";
import { RouterProvider } from 'react-router-dom';
import router from '../src/routes/router'
import { Provider } from 'react-redux';
import { store } from './store/store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
     <RouterProvider router={router} />
  </Provider>
)
