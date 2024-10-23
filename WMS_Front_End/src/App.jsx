/* eslint-disable no-unused-vars */
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginHome from './components/LoginHome';
import AdminLogin from './components/admin/AdminLogin';
import CalisanLogin from './components/calisan/calisanLogin';
import MagazaLogin from './components/magaza/magazaLogin';
function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginHome />} />
      <Route path='/calisanLogin' element={<CalisanLogin />} />
      <Route path='/magazaLogin' element={<MagazaLogin />} />
      <Route path='/adminLogin' element={<AdminLogin />} />
    </Routes>
  )
}

export default App
