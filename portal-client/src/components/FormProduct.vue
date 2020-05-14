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
    <input type="number" name="price" id="price" min="0" step="any" oninput="validity.valid||(value='');" v-model="product.price" />

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
        name: "",
        description: "",
        price: 0,
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
      if (price === null || price === 0) {
        return;
      }
      if (category === null || category === "") {
        return;
      }

      this.$store
        .dispatch("createProduct", this.product)
        .then(result => {
          this.product.name ="";
         this.product.description = ""
         this.product.price = 0
         this.product.category = 1

          alert(result.data)
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