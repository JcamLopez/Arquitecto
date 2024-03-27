import { useAuthProviderContext } from './Context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'
function ProtectedRoutes() {
  const { isAuthenticated } = useAuthProviderContext()
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />
}

export default ProtectedRoutes