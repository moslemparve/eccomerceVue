<template>
    <div class="col-md-12" >
        <h2>{{ product.name ? product.name : 'Select Product'}}</h2>
    <table class="table table-striped">
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Product Brand</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{product.name}}</td>
        <td>{{product.brand}}</td>
        <td>{{product.price}}</td>
      </tr>
      
    </tbody>
  </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            product:{}
        }
    },
    created(){
        Event.$on('select_product',(product)=>{
            this.product=product
            // console.log('from emit',product);
        })
    }
    
}
</script>