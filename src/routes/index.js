import Home from '~/pages/Home';
import About from '~/pages/About';
import Auth from '~/pages/Auth';
// not required login
const publicRoutes = [
    {
        path: '/',
        component: Home,
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
