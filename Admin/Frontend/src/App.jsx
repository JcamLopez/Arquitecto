
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthProvider from './Context/AuthContext'
import LoginPage from './Pages/LoginPage'
import Index from './Pages/Index'
import ProtectedRoutes from './ProtectedRoutes'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={ProtectedRoutes} >
            <Route path="/index" element={<Index />} />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>


  )
}

export default App
