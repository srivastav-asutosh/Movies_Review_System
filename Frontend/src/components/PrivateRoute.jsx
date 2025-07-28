import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.token ? children : <Navigate to="/login" replace />;
}