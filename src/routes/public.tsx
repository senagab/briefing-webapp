import App from '../App';
import { Login } from '../pages';

export const publicRoutes = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '/login',
        element: <Login />
    }
];
