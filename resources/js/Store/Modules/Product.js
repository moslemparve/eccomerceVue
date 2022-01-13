
import axios from 'axios'

export default { 
	namespace:true,
	state:{
		products:{}
	},	
	actions:{
	async getProducts ({commit}) {
		await axios.get('api/products').then((res)=>{
			commit('Set_Product',res.data.products)
         }).catch((e)=>{
         console.log(e);
         });
	}
},
mutations:{
		 Set_Product (state,products){
			state.products=products
		}
	},
	 getters : {
		getAllProducts(state) {
		  return state.products;
	  },
	}
}
