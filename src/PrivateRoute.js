import { useAuth } from 'Redux/hooks/useAuth';
import { Navigate } from 'react-router-dom';



export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = !isLoggedIn ;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};