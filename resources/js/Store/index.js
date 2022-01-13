import Vue from 'vue'
import Vuex from 'vuex'
import Product from './Modules/Product'
import Cart from './Modules/Cart'
import User from './Modules/User'
Vue.use(Vuex)
export default new Vuex.Store({
	modules:{
		Product,
		Cart,
		User
	}
})