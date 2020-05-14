<template>
  <div class="products">
    <div class="row">
      <div class="col-md-8">
        <Grid />
      </div>
      <div class="col-md-4">
        <FormProduct />
      </div>
    </div>
  </div>
</template>

<script>
import FormProduct from "@/components/FormProduct";
import Grid from "@/components/Grid.vue";
export default {
  name: "Home",
  data() {
    return {
      product: {
        name: "",
        description: "",
        price: 0,
        category: 1
      }
    };
  },
  components: {
    Grid,
    FormProduct
  },
  methods: {
    addProduct: function() {
      let name = this.product.name;
      let description = this.product.description;
      let price = this.product.price;
      let category = this.product.category;

      if (name === null || name === "") {
        return;
      }
      if (description === null || description === "") {
        return;
      }
      if (price === null || price === "") {
        return;
      }
      if (category === null || category === "") {
        return;
      }
    }

    
  }
};
</script>

<style lang="scss" scoped>
</style>
