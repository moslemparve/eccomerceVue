<template>
    <div class="menu_up_first_icon">
        <div class="top_icon">
            <i class="fas fa-shopping-cart"></i>
            <span class="icon_up">{{ Cartlength }}</span>
        </div>
        <div class="shoping_card_details">
            <div v-show="Cartlength > 0" class="adjust_scrool_here">
                <div
                    v-for="item in cart"
                    :key="item.id"
                    class="shoping_card_details_top"
                >
                    <div class="shopping_card_left_img">
                        <a href="">
                            <img :src="'images/' + item.image" alt="image" />
                        </a>
                    </div>
                    <div class="shoping_card_details_top_text">
                        <a href="">{{ item.name }}</a>
                        <ul>
                            <li>{{ item.unit_price }}</li>
                            <li
                                :style="{
                                    marginLeft: 7 + 'px',
                                    marginRight: 7 + 'px',
                                    color: 'fuchsia'
                                }"
                            >
                                x
                            </li>
                            <li>{{ item.quantity }}</li>
                        </ul>
                    </div>
                    <div class="top_shoping_card_price">
                        <p>{{ item.price }}</p>
                    </div>
                    <div class="top_shoping_card_remove">
                        <a @click="DeleteCartItem(item.id)"><p>remove</p></a>
                    </div>
                </div>
                <div class="shpng_card_middle_all">
                    <div class="shpng_card_middle brdr_0px">
                        <p class="shpng_card_middle_p">Sub-total</p>
                        <p class="shpng_card_middle_p2">Rs {{ CartTotal }}</p>
                    </div>
                    <div class="shpng_card_middle">
                        <p class="shpng_card_middle_p">Total</p>
                        <p class="shpng_card_middle_p2">Rs {{ CartTotal }}</p>
                    </div>
                </div>
                <div class="shpng_card_btm">
                    <router-link to="/cart">View Cart</router-link>
                    <a href="check-out.html">Checkout</a>
                </div>
            </div>
            <div v-show="Cartlength == 0" class="empty_card">
                <p class="shpng_card_middle_p">Your Card Is Empty</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.empty_card {
    text-align: center;
    color: white;
}
.shoping_card_details {
    max-height: 450px;
    overflow: auto;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {};
    },
    methods: {
        DeleteCartItem(id) {
            // console.log(id);
            this.$Progress.start();
            this.$store.dispatch("RemoveCartItem", {
                id
            });
            this.$Progress.finish();
        }
    },
    computed: {
        ...mapGetters({
            cart: "getCartItem",
            Cartlength: "getCartCount",
            CartTotal: "getCartTotal"
        })
        // Cartlength() {
        //    return (this.Cartlength = this.$store.state.Cart.cartCount);
        //     //  (this.cart = this.$store.state.Cart.cart);
        // }
    },
    created: function() {
        // alert('{{graphId}}');
    },
    mounted() {
        console.log("mounted");
    }
};
</script>
