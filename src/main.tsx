import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>

    <ToastContainer
      position="top-right"
      autoClose={5000} 
      hideProgressBar={false} 
      newestOnTop={false} 
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </BrowserRouter>
)
