<template>
  <main class="form">
    <div class="title">
      <span>Nuevo producto</span>
    </div>

    <label for="name">Nombre:</label>
    <input type="text" name="name" id="name" v-model="product.name" />

    <label for="description">Descripción:</label>
    <input type="text" name="description" id="description" v-model="product.description" />

    <label for="price">Precio:</label>
    <input type="number" name="price" id="price" v-model="product.price" />

    <label for="category">Categoría:</label>

    <select id="category" name="category" v-model="product.category">
      <option value="1">Prueba</option>
    </select>

    <br />
    <button v-on:click="addProduct">Guardar</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "Test",
        description: "Desc",
        price: 55,
        category: 1
      }
    };
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

      this.$store
        .dispatch("createProduct", this.product)
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  border: 1px solid #dddddd;
  padding: 5px;
}
</style>