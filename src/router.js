import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: "/categorie/add",
      name: "add-categorie",
      component: () => import("../src/components/CategorieAdd")
    },
    {
      path: "/topic/:id",
      name: "topic",
      component: () => import("../src/components/Topic")
    },
    {
      path: "/topic/add/:id",
      name: "add-topic",
      component: () => import("../src/components/TopicAdd")
    },
    {
      path: "/topic/edit/:id",
      name: "edit-topic",
      component: () => import("../src/components/TopicEdit")
    },
    {
      path: "/post/edit/:id",
      name: "edit-post",
      component: () => import("../src/components/PostEdit")
    },
    {
      path: "/categorie/:id",
      name: "edit-categorie",
      component: () => import("../src/components/CategorieEdit")
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile-view',
      
      component: () => import('./views/ProfileView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/mod',
      name: 'moderator',
      
      component: () => import('./views/BoardModerator.vue')
    },
    {
      path: '/user',
      name: 'user',
      
      component: () => import('./views/BoardUser.vue')
    },
  ]
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });