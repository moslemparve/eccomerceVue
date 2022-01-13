
import VueRouter from 'vue-router'
window.Vue = require('vue').default;
import Swal from 'sweetalert2'
const routes = [
  { path: '/', component: Vue.component('laraComponent', require('./components/HomeComponent.vue').default),meta:{auth:true}
 },
 { path: '/service', component: Vue.component('laraComponent', require('./components/ServiceComponent.vue').default),meta:{auth:true}
 },
 { path: '/products', component: Vue.component('laraComponent', require('./components/ProductsComponent.vue').default),meta:{auth:true}
 },
 { path: '/cart', component: Vue.component('laraComponent', require('./components/ViewCartComponent.vue').default),meta:{auth:true}
 },
 { path: '/productlists', component: Vue.component('laraComponent', require('./components/ShowProductComponent.vue').default),meta:{auth:true}
 },
 { path: '/login', component: Vue.component('laraComponent', require('./components/User/LoginComponent.vue').default), meta:{auth:false}
 },
]
const router = new VueRouter({
    routes,
    mode:'history'
})
Vue.use(VueRouter);
router.beforeEach((to,from,next) => {
  const token = localStorage.getItem('Auth_Token');
  if ('auth' in to.meta && to.meta.auth && token == null) {
    Swal.fire({
      title: 'You are Not Loggen In ! <br> Please Login to Continue !',
      icon: 'error',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
      next('/login');
  } else if ('auth' in to.meta && !to.meta.auth && token != null) {
      next('/');
  } else {
    
      next();
 }
})
export default router;
