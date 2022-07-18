import { Navbar } from './components/Navbar';
// import { 
//   BrowserRouter, 
//   Router, 
//   Route,
// } from 'react-route-dom'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Home } from './pages/Home';
import { PageDetails } from './pages/Details'


export function AppRoutes() {
  return (
    <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<PageDetails />} />
        </Routes>
    </BrowserRouter>
  )
}