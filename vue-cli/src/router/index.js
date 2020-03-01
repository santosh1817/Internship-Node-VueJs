import Home from '../components/Home.vue';
import Users from '../components/Users';
import Register from '../components/Users/Register';
import VueRouter from 'vue-router';

export default new VueRouter({
  routes: [
    {
        path:'/users',
        name:'Users',
        component:Users
        
    },
    {
        path:'/users/register',
        name:Register,
        component:Register
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
  ]
});