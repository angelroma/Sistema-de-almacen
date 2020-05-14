<template>
  <div class="products">
    <div class="row">
      <div class="col-md-8">
        <Grid/>
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
  components: {
    Grid,
    FormProduct
  }
};
</script>

<style lang="scss" scoped>
</style>
