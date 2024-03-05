import { useAuth } from '../utils/utils';
import { Navigate, Outlet } from 'react-router-dom';
function ProtectedRoute() {
  const { auth } = useAuth();

  return auth ? <Outlet /> : <Navigate to={'/signin'} />;
}

export default ProtectedRoute;
