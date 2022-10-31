import Home from '~/pages/Home';
import About from '~/pages/About';
import Auth from '~/pages/Auth';
import Category from '~/pages/Category';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import ForgotPassword from '~/pages/ForgotPassword';
import Changepass from '~/pages/Changepass';
import AdminCategory from '~/pages/Admin/Category';
import AdminLayout from '~/layouts/AdminLayout';
// not required login
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/category/search/:keyword',
        component: Category,
    },
    {
        path: '/category/:categoryId',
        component: Category,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: 'auth',
        component: Auth,
        layout: null,
    },
    {
        path: 'register',
        component: Signup,
        layout: null,
    },
    {
        path: 'login',
        component: Login,
        layout: null,
    },
    {
        path: 'forgotpassword',
        component: ForgotPassword,
    },
    {
        path: 'changepass',
        component: Changepass,
    },
    {
        path: 'admin/category',
        component: AdminCategory,
        layout: AdminLayout,
    },
];

// required login routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
