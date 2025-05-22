import { useState } from 'react'
import './App.css'
import Lander from './pages/Landingpage/Lander.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Supplier/Profile.jsx'
import { BrowserRouter ,Route , Routes } from 'react-router-dom'
import Source_dashboard from './pages/Source/Source_dashboard.jsx'
import SupplierEdit from './pages/Source/Supplier_edit.jsx'
import New_Quotation from './pages/Source/New_Quotation.jsx'
import Supplier_Dashboard from './pages/Supplier/Supplier_Dashboard.jsx'
import Supplier_Initial_Offer from './pages/Supplier/Supplier_Initial_Offer.jsx'
import Offer_Details from './pages/Supplier/Offer_Details'
import Reply_Details from './pages/Source/Reply_Details'
import Quotation_Details from './pages/Source/Quotation_Details'
function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            {/* <Route path='/register' element={<Login/>} /> */}


            {/*Sourcing */}

            <Route path='/' element={<Lander/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/Source_dashboard' element={<Source_dashboard/>} />
            <Route path='/Supplier_edit' element={<SupplierEdit/>} />
            <Route path='/Profile' element={<Profile/>} />
            <Route path='/New_Quotation' element={<New_Quotation/>} />
            <Route path='/Reply_Details' element={<Reply_Details/>} />
            <Route path='/Quotation_Details' element={<Quotation_Details/>} />


            {/* Supplier */}

            <Route path='/Supplier_Dashboard' element={<Supplier_Dashboard/>} />
            <Route path='/Supplier_Initial_Offer' element={<Supplier_Initial_Offer/>} />
            <Route path='/Offer_Details' element={<Offer_Details/>} />
          </Routes>
        </BrowserRouter>
    </div>

  )
}

export default App
