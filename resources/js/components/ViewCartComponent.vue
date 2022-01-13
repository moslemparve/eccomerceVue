<template>
<div>
<Menu/>
<Header/>

	<div class="all_content">

		<!--===== Product up section ========-->
		<div class="product_up_section">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="product_up_section_all">
							<div class="product_up_sec_left">
								<ul class="product_up_left_ul">
									<li>
										<i class="fas fa-home"></i>
									</li>
									<li>Shopping Cart</li>
								</ul>
							</div>
							<div class="product_up_sec_right">
								<p>Shopping Cart</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--===== Product up section End ========-->
		<div class="top_check_out_section_two" v-show="Cartlength>0">
			<div class="container">
				<div class="row">
					<div class="shopping_top">
						<h3 class="shopping_title">Shopping Cart</h3>
					</div>
					<div class="col-md-12 col-lg-12 col-12">
						<div class="shopping_main_section">
							<div class="shopping_main_section_top">
								<div class="shopping_main_sec_one">
									<p class="shopping_main_sec_one_p jsty_centr">Image</p>
								</div>
								<div class="shopping_main_sec_two">
									<p class="shopping_main_sec_one_p jsty_strt">Product Name</p>
								</div>
								<div class="shopping_main_sec_three">
									<p class="shopping_main_sec_one_p jsty_strt">Model</p>
								</div>
								<div class="shopping_main_sec_three">
									<p class="shopping_main_sec_one_p jsty_strt">Quantity</p>
								</div>
								<div class="shopping_main_sec_four">
									<p class="shopping_main_sec_one_p jsty_end">Unit Price</p>
								</div>
								<div class="shopping_main_sec_four">
									<p class="shopping_main_sec_one_p jsty_end">Total</p>
								</div>
							</div>
							<div  v-for="item in cart"
                    :key="item.id" class="shopping_main_section_btm">
								<div class="shopping_main_sec_one">
									<p class="shopping_main_sec_one_p jsty_centr">
										<a href="">
                                                 <img class="checkout_image_table" :src="'images/'+item.image" alt="image" />
										</a>
									</p>
								</div>
								<div class="shopping_main_sec_two">
									<p class="shopping_main_sec_one_p jsty_strt">
										<a href="product-details.html">{{ item.name }}</a>
									</p>
								</div>
								<div class="shopping_main_sec_three">
									<p class="shopping_main_sec_one_p jsty_strt">AMD Ryzen 5 3400G</p>
								</div>
								<div class="shopping_main_sec_three">
									<div class="table_quanty">
										<input type="number" name="text" min="0" :value="item.quantity" @click="UpdateQuantity($event,item)">
									</div>
								</div>
								<div class="shopping_main_sec_four">
									<p class="shopping_main_sec_one_p jsty_end">{{ item.unit_price}}</p>
								</div>
								<div class="shopping_main_sec_four">
									<p class="shopping_main_sec_one_p jsty_end">{{ item.price}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row justify-content-end">
					<div class="col-md-4 col-lg-4 col-12">
						<div class="btm_table_shpng_card">
							<div class="btm_table_shpng_card_top">
								<div class="btm_table_shpng_card_top_one">
									<p class="shpng_card_total_p">Sub-Total:</p>
								</div>
								<div class="btm_table_shpng_card_top_one">
									<p class="shpng_card_btm_p"> {{CartTotal}}</p>
								</div>
							</div>
							<div class="btm_table_shpng_card_btm">
								<div class="btm_table_shpng_card_top_one">
									<p class="shpng_card_total_p">Total:</p>
								</div>
								<div class="btm_table_shpng_card_top_one">
									<p class="shpng_card_btm_p"> {{CartTotal}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="shpng_card_btm_text">
						<h2 class="shpng_card_btm_text_h2">What would you like to do next?</h2>
						<p class="shpng_card_btm_text_p">Choose if you have a discount code or reward points you want to
							use or would like to estimate your delivery cost.</p>
					</div>
					<div class="col-md-12 col-lg-12 col-12">
						<div class="all_input_checkout">
							<div class="row">
								<div class="col-md-12 col-lg-6 col-12">
									<div class="check_input_one">
										<input class="shpng_input mrgn_btm" type="text" name="text"
											placeholder="Enter your promo code here">
										<button class="check_input_button shpng_input_btn">Apply Promo Code</button>
									</div>
								</div>
								<div class="col-md-12 col-lg-6 col-12">
									<div class="check_input_one">
										<input class="shpng_input" type="text" name="text"
											placeholder="Enter your gift voucher code here">
										<button class="check_input_button shpng_input_btn">Apply Voucher</button>
									</div>
								</div>
							</div>
						</div>
						<div class="order_btm_btn_all">
							<div class="order_btm_btn_all">
								<button class="">Continue Shopping</button>
								<button class="">Confirm Order</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div v-show="Cartlength==0">
            your cart is empty
        </div>
	</div>
    <Footer/>
   </div>
</template>
<script>
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Menu from './MenuComponent'
import { mapGetters,mapActions} from 'vuex'

    export default {
        data(){
            return{
                productID:0
            }
        },
     components:{
        Header,
        Menu,
        Footer,
    },
    methods:{
UpdateQuantity(event,product){
    this.$Progress.start();
    // console.log('from cart',event.target.value);
            this.$store.dispatch("addToCart", {
                product: product,
                quantity:event.target.value
            });
            this.$Progress.finish();
        // this.quantity = 
        // this.productID = id;
}
    },
       computed: {
        ...mapGetters({
		cart:'getCartItem',
        	Cartlength:'getCartCount',
        	CartTotal:'getCartTotal'
		}) ,
        },
    mounted(){
        // console.log('from cartsss');
    }
    }
</script>