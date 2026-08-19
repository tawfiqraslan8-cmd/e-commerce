import SignIn from './pages/Authentication/SignIn'
import SignUp from './pages/Authentication/SignUp'
import Home from "./pages/User/Home";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import { Route, Routes } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import UseAuthStore from "./store/UseAuthStore";
// import { dividerClasses } from '@mui/material'
import { DashboardLayout } from './components/layouts/DashboardLayout';
import ProductsTable from './pages/Admin/ProductsTable';
import ProductDetails from "./pages/Admin/ProductDetails";
import Card from "./pages/User/Card";
import CardDetails from "./pages/User/CardDetails";
import CardLayout from "./components/layouts/CardLayout";
import Dashboard from "./pages/Admin/Dashboard";
import About from "./pages/User/About";
import Services from "./pages/User/Services";
import Contact from "./pages/User/Contact";
import Settings from "./pages/Admin/Settings";
import AdminRoute from "./components/routes/AdminRoute";




function App() {
  const { userRole } = UseAuthStore();

  console.log("userRole:", userRole);

  return (
    <Routes>
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />


      {/* صفحات المستخدم */}

 <Route path="/" element={<CardLayout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="services" element={<Services />} />
  <Route path="contact" element={<Contact />} />
  <Route path="card" element={<Card />} />
  <Route path="card/:id" element={<CardDetails />} />
</Route>


      {/* صفحات الأدمن */}

      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<DashboardLayout />}>

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="products" element={<ProductsTable />} />

          <Route path="settings" element={<Settings />} />

          <Route path="products/:id" element={<ProductDetails />} />

        </Route>
      </Route>

      {/* <Route path='/' element={<DashboardLayout />}>
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
      </Route> */}

    </Routes>

  )
}

export default App
