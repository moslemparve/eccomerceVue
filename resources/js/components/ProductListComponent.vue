<template>
    <div >
        <ul>
       <li v-for="prods in allproducts.data" :key="prods.id"><a href="" @click="SelectProduct($event,prods)">{{prods.name}}</a></li>
       </ul>
    </div>
</template>
<script>
export default {
  
    props:['allproducts'],
    methods:{
        SelectProduct(e,product){
            e.preventDefault();
            Event.$emit('select_product',product);

        }
    }
}
</script>