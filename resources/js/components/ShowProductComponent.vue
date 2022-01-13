<template>
      <div class="all_content">
          <Menu/>
<Header/>
          <div class="row">
          <div class="col-md-8">
              <ProductDetail  />
      </div>
      <div class="col-md-4">
          <ProductList :allproducts="products"/>
      </div>
      </div>
      <Footer/>
      </div>
</template>
<script>
import ProductList from './ProductListComponent'
import ProductDetail from './ProductDetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Menu from './MenuComponent'
import { mapGetters,mapActions} from 'vuex'

export default {
    data(){
        return {
        }
    },
  methods: {
   
  },
    components:{
        ProductList,
        ProductDetail,
        Header,
        Footer,
        Menu,
    },
     computed:{
		...mapGetters({
		products:'getAllProducts'	
		})  
    },
     mounted(){
          this.$store.dispatch('getProducts');
		// this.products = this.$store.state.Product.products.data;
     }
}
</script>