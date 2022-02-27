<template>
    <div>
        <div class="product_right" v-show="notfound == false">
            <!--=====  card========-->
            <div
                v-for="product in loadproducts.data"
                :key="product.id"
                class="product_card_details"
            >
                <div class="pro_card_details_one">
                    <div class="pro_card_image">
                        <a href="">
                            <img :src="'images/' + product.image" alt="" />
                        </a>
                    </div>
                </div>
                <div class="pro_card_details_two">
                    <div class="pro_card_right_up">
                        <div class="card_text_sec pro_card_text">
                            <p>{{ product.description }}</p>
                        </div>
                        <div class="card_text_bottom pro_card_text_two">
                            <ul class="card_text_bottom_ul">
                                <li>{{ product.name }}</li>
                                <li>{{ product.brand }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="pro_card_details_bottom">
                        <div class="onne">
                            <div class="pro_card_bottom_one">
                                <p class="pro_card_bottom_one_p">
                                    Rs {{ product.price }}
                                </p>
                            </div>
                            <div class="price_icon mrgn_r8">
                                <p>
                                    <i class="fas fa-long-arrow-alt-right"></i>
                                </p>
                                <p>
                                    <i class="fas fa-long-arrow-alt-left"></i>
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            class="btn btn-primary"
                            href=""
                            @click.prevent="addtoCart(product)"
                        >
                            <div class="pro_card_bottom_two">
                                <i class="fas fa-shopping-cart" style="color:white;"></i>
                                <a href="#" style="color:white;">Add to Cart</a>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <!--===== card ========-->

            <!--===== card ========-->
        </div>
        <div v-show="notfound == true">
            <div class="product_right" style="">
                <div class="product_card_details">
                    <div class="pro_card_details_two">
                        <div class="pro_card_right_up">
                            <div class="card_text_sec pro_card_text not_found" >
                                <p>Product Not Found</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["loadproducts", "notfound"],
    data() {
        return {};
    },
    methods: {
        addtoCart(product) {
            this.$Progress.start();
            this.$store.dispatch("addToCart", {
                product: product,
            });
            this.$Progress.finish();
        }
    },
    mounted() {
        // console.log('mounting from product',load);
    }
};
</script>
<style>
.not_found{
	padding: 0px 0px 13px 316px !important;
}
</style>