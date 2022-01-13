require('./bootstrap');
window.Vue = require('vue').default;
import router from './Routes'
import store from './Store'
import axios from 'axios'
import VueProgressBar from 'vue-progressbar'
let Event = new Vue();
window.Event = Event;
const auth_token = JSON.parse(localStorage.getItem("Auth_Token")) || [];
async function LoadCart() {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+auth_token
  }
  if(auth_token){
  axios.get('api/user', {
    headers: headers
  }).then((res)=>{
    // console.log('from appjs',res.data.name)
    store.dispatch('UserLogin',res.data.name);
    store.commit('SetAuth',true);
  })
}
  store.dispatch('getProducts');
    await axios.get('api/get/cart').then((res)=>{
        // console.log('from app js',res.data.cartData)
        store.dispatch('addCartCount',res.data.count);
        store.dispatch('getCartItem',res.data.cartData);
        store.dispatch('addCartTotal',res.data.total);
    }).catch((error)=>{
        console.log(error);
    })
  }
  LoadCart();
  const options = {
    color: 'rgb(143, 255, 199)',
    thickness: '8px',
    failedColor: 'red',
    height: '10px',
    transition: {
      speed: '0.2s',
      opacity: '1s',
      termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
  }
Vue.use(VueProgressBar, options)

const app = new Vue({
    el: '#app',
    router,
    store
});
