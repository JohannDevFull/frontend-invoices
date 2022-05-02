import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Dashboard from '../views/App/Dashboard.vue'
import InvoicesSales from '../views/App/Invoices/InvoicesSales.vue'
import CreateInvoicesSales from '../views/App/Invoices/Create.vue'
import CreateInvoices from '../views/App/Invoices/Create.vue'

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
    name: 'login',
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
    component: Dashboard
  },
  {
    path: '/invoices-sales',
    name: 'invoices_sales',
    component: InvoicesSales
  },
  {
    path: '/invoices-sales/create',
    name: 'invoices-sales-create',
    component: CreateInvoicesSales
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: InvoicesSales
  },
  {
    path: '/invoices/create',
    name: 'invoices-sales',
    component: CreateInvoices
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
