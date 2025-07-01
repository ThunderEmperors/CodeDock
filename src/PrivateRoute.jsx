import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export function PrivateRoute({ children, roles = [] }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles.length > 0 && !roles.some(role => user.roles?.includes(role))) {
    return <Navigate to="/" replace />;
  }

  return children;
}
