import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminLogin from './pages/AdminLogin'
import MerchantOnboarding from './pages/MerchantOnboarding'
import MerchantDashboard from './pages/MerchantDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Checkout from './pages/Checkout'
import Docs from './pages/Docs'
import Header from './components/Header'
import { AuthProvider } from './contexts/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/onboarding" element={<MerchantOnboarding />} />
            <Route path="/merchant" element={<MerchantDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  )
}
