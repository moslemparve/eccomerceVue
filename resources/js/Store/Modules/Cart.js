import axios from "axios";
import Swal from 'sweetalert2'
export default {
	namespace:true,
	state:{
		cart:[],
    cartCount:0,
    cartTotal:0
	},	
	actions:{
        async addToCart({commit},{product,quantity}){
            await axios.post('api/cart',{
                productID: product.id,
                quantity:quantity
              }).then((res)=>{
                // return   console.log(res);
                commit('addToCart',res.data.cartData);
                commit('addCartCount',res.data.count);
                commit('addCartTotal',res.data.total);
                // this.$Progress.finish()
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: ''+res.data.name+' Added to Card'
                  })
             }).catch((e)=>{
             console.log(e);
             });
        },
        RemoveCartItem({commit},id){
         axios.post('api/remove/cart',{id}).then((res)=>{
            // console.log('removingid',res.data);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'success',
                title: ''+res.data.name+' Removed from Card'
              })
            commit('addToCart',res.data.cartData);
            commit('addCartCount',res.data.count);
            commit('addCartTotal',res.data.total);
        })    
        },
        getCartItem({commit},response){
            commit('addToCart',response);
        },
        addCartCount({commit},data){
            commit('addCartCount',data);
        },
        addCartTotal({commit},data){
          commit('addCartTotal',data);
      }

},
mutations:{
    addToCart(state,cartitem){
        state.cart = cartitem;
    },
    addCartCount(state,cartcount){
        state.cartCount = cartcount;
    },
    
    RemoveFromCart(state,{product}){
        state.cart.pop(product);
    },
    addCartTotal(state,carttotal){
      state.cartTotal= carttotal;
    }
	},
  getters : {
    getCartItem(state) {
      return state.cart;
    },
    getCartCount(state) {
      return state.cartCount;
    },
    getCartTotal(state) {
      return state.cartTotal;
    }
  }
}
