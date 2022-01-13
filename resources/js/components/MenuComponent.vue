<template>
    <div>
<div class="menu_top_section">
        <div class="container">
            <div class="menu_top">
                <div class="row">
                    <div class="col-md-4 col-lg-3 col-1 top_left">
                        <div class="menu_top_left">
                            <i class="phone_icon fas fa-phone"></i>
                            <p class="number">091234444(10 AM - 7 PM)</p>
                        </div>
                    </div>
                    <div class="col-md-1 col-lg-3 d-lg-block d-md-block d-none"></div>
                    <div class="col-md-7 col-lg-6 col-11 top_right">
                        <div class="menu_top_right">
                            <ul class="menu_top_right_ul">
                                <li class="menu_top_right_ul_li dis_nne_ipd d-md-none">
                                    <a class="menu_top_right_ul_li_a clr" href="service.html">Bulid Your Own Pc</a>
                                </li>
                                <li class="menu_top_right_ul_li">
                                <router-link class="menu_top_right_ul_li_a clr" to="/products">Products</router-link>
                                </li>
                                <li class="menu_top_right_ul_li">
                                <router-link class="menu_top_right_ul_li_a clr" to="/service">Service</router-link>
                                </li>
                                <li class="menu_top_right_ul_li">
                                <router-link class="menu_top_right_ul_li_a clr" to="/productlists">EMI</router-link>
                                </li>
                                
                                <li class="menu_top_right_ul_li dis_nne">
                                    <a class="menu_top_right_ul_li_a" href="">{{current_user ? current_user :''}}</a>
                                </li>
                                <li v-show="authenticated==false" class="menu_top_right_ul_li">
                                    <i class="far fa-user"></i>
                                    <a class="menu_top_right_ul_li_a dis_nne" href="register.html">Register</a>
                                    <p class="or_p dis_nne">or</p>
                                    <router-link class="menu_top_right_ul_li_a dis_nne" to="/login">Login</router-link>
                                </li>
                                <li v-show="authenticated==true" class="menu_top_right_ul_li">
                                    <a class="menu_top_right_ul_li_a clr"  href="" @click.prevent="Louout">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    <div class="menu_up_section">
        <div class="container">
            <div class="row" style="align-items: center;">
                <div class="col-1 d-md-none d-lg-none pdng_0">
                    <div  id="icon_click" class="mobile_logo_icon">
                        <i class="icon_click fas fa-bars"></i>
                        <i class="icon_rmv fas fa-times"></i>
                    </div>
                </div>
                <div class="col-md-2 col-3">
                    <div class="logo">
                    <router-link to="/">
                            <img src="img/logo.png" alt="image">
                        </router-link>
                    </div>
                </div>
               

<Search/>
                <div class="col-md-4 col-8 pad_lft">
                    <div class="menu_up_section_right">
                        <div class="menu_serch_icon d-md-none">
                            <i class="icon_one fas fa-search"></i>
                            <i class="icon_two fas fa-search"></i>
                        </div>
                        <div class="line_all">
                            <p class="line" style="display: block"></p>
                        </div>
                        <div class="menu_up_first_icon">
                            <div class="top_icon">
                                <a href="product-compare.html">
                                    <i class="fas fa-sliders-h"></i>
                                </a>
                                <span class="icon_up">0</span>
                            </div>                      
                        </div>
                        <div class="line_all">
                            <p class="line" style="display: block"></p>
                        </div>
                        <Cart/>
                        <div class="menu_up_link">
                            <i class="fa fa-desktop" aria-hidden="true"></i>
                            <a href="qoute.html">BUILD YOUR OWN PC</a>
                        </div>
                    </div>
                </div>
            </div>  
        </div>    
    </div>
   
    </div>
</template>

<script>
import Search from './SearchComponent'
import Cart from './CartComponent'
import { mapGetters,mapActions} from 'vuex'

    export default {
        data(){
            return {
            }
        },
        methods:{
            Louout(){
                   this.$Progress.start()
             localStorage.removeItem('Auth_Token');
              this.$store.commit('SetAuth',false);
              this.$store.commit('SetUser','');
                   this.$Progress.finish()
                    this.$router.push('/login');

            }
        },
    components:{
        Search,
        Cart
    },
     computed:{
		...mapGetters({
		current_user:'getCurrentUser',
        authenticated:'getAuth'	
		}) 
        // console.log(current_user)
     }
    }
</script>
