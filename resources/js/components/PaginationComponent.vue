<template>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#" ></a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</template>
<script>
export default {
  computed:{
    currentPage:{
      get(){
        return this.$store.product.data.products.current_page;
      },
      LastPage:{
        get(){
          return this.$store.product.data.products.total;
        }
      }
    }
  },
  mounted(){
    console.log(this.$store.state.Product.products.data)
  }
}
</script>

