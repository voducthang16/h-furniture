import Home from '~/pages/Home';
import About from '~/pages/About';
import Auth from '~/pages/Auth';
import Category from '~/pages/Category';
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
        path: '/category/:id',
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
];

// required login routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
