
import axios from 'axios'

export default { 
	namespace:true,
	state:{
		user:'',
		userToken:'',
		authenticated:false
	},	
	actions:{
	async UserLogin ({commit},user) {
        commit('SetUser',user);
	},
	SetToken ({commit},token){
	commit('SetToken',token);
	commit('SetAuth',true);
	}
},
mutations:{
   
    SetUser(state,user){
        state.user = user
    },
	SetAuth(state,value){
		state.authenticated=value
	},
	SetToken(state,token){
		state.userToken = token
		localStorage.setItem("Auth_Token", JSON.stringify(token));
	}
},
getters : {
	getCurrentUser(state) {
		return state.user;
	},
	getAuth(state){
		return state.authenticated;
	}
}
}
