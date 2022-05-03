import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Dashboard from '../views/App/Dashboard.vue'
import InvoicesSales from '../views/App/Invoices/InvoicesSales.vue'
import CreateInvoicesSales from '../views/App/Invoices/Create.vue'
import EditInvoicesSales from '../views/App/Invoices/Edit.vue'
import CreateInvoices from '../views/App/Invoices/Create.vue'

import { useUserStore } from '@/stores/user'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },


  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      requiresAuth: true
    },
    component: Dashboard
  },
  {
    path: '/invoices-sales',
    name: 'invoices_sales',
    meta: {
      requiresAuth: true
    },
    component: InvoicesSales
  },
  {
    path: '/invoices-sales/create',
    name: 'invoices-sales-create',
    meta: {
      requiresAuth: true
    },
    component: CreateInvoicesSales
  },
  {
    path: '/invoices-sales/edit/:id',
    name: 'invoices_sales_edit',
    meta: {
      requiresAuth: true
    },
    component: EditInvoicesSales
  },
  {
    path: '/invoices',
    name: 'invoices',
    meta: {
      requiresAuth: true
    },
    component: InvoicesSales
  },
  {
    path: '/invoices/create',
    name: 'invoices-sales',
    meta: {
      requiresAuth: true
    },
    component: CreateInvoices
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


router.beforeEach((to, from, next) => {

  const store = useUserStore();

  const token = localStorage.getItem('token');

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // if (store.isAuth) {
    //   next();
    // } else {
    //   next({ name: "Login" });
    // }
    if (token != '') 
    {
      next();
    } 
    else 
    {
      next({ name: "Login" });
    }

  } else {
    next();
  }
});


export default router
