import { Route, Routes, } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Register from '@/screens/Register';
import Login from '@/screens/Login';
import Home from '@/screens/Home'
import Profile from '@/screens/Profile';
import MainLayout from '@/layouts/MainLayout';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './screens/home/About';
import checkRedirection from './components/checkRedirection';


const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path='/' element={checkRedirection(MainLayout)}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
