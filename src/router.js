import Vue from "vue";
import VueRouter from "vue-router";



import Login from './pages/Login'
import Register from './pages/Register'
import PageNotFound from './pages/PageNotFound'
Vue.use(VueRouter);
const routes = [


    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '*',
        name: 'page-not-found',
        component: PageNotFound
    },
]



const router = new VueRouter({
    routes,
})
export default router;