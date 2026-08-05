import { useState } from 'react'
import SignIn from './pages/Authentication/SignIn'
import SignUp from './pages/Authentication/SignUp'
import Home from "./pages/Home";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import { Route, Routes } from 'react-router-dom'
// import { dividerClasses } from '@mui/material'
import { DashboardLayout } from './components/layouts/DashboardLayout';
import ProductsTable from './pages/ProductsTable';
import ProductDetails from './pages/ProductDetails';
import Card from "./pages/Card";
import CardDetails from "./pages/CardDetails";
import CardLayout from "./components/layouts/CardLayout";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";





function App() {
  const [count, setCount] = useState(0)
 console.log("fg");
 
  return (
    <Routes>

      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />


      <Route path='/' element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductsTable />} />
          <Route path="/products/:id" element={<ProductDetails />} />
      </Route>



      <Route element={<CardLayout />}>
        <Route index element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Route>
      
    </Routes>

  )
}

export default App
