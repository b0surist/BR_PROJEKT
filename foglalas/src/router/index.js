import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Booking from '../views/Booking.vue'
import BookingPage from '@/views/BookingPage.vue'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/booking/:service',
      name: 'booking',
      component: Booking,
    },
    {
       path: '/', component: Booking
    },
    { 
    path: '/foglalas/:day/:hour', component: BookingPage, props: true
    }
  ],
})

export default router
