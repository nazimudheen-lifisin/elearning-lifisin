import { Route, Routes, } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Register from '@screens/auth/Register';
import Login from '@screens/auth/Login';
import Home from '@screens/Home'
import Profile from '@screens/Profile';
import MainLayout from '@layouts/MainLayout';
import About from '@screens/Home/About';
import ProtectedRoute from './ProtectedRoute';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
