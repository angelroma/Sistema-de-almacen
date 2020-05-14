<template>
  <main class="form">
    <div class="title">
      <span>Detalles del producto</span>
    </div>
    <br />
    <a href="#" v-on:click="isEditMode = !isEditMode">{{isEditMode === false? "Editar": "Cancelar"}}</a>
    <br />
    <label for="name">Nombre:</label>
    <input type="text" name="name" id="name" v-model="product.name" :disabled="!isEditMode" />

    <label for="description">Descripción:</label>
    <input
      type="text"
      name="description"
      id="description"
      v-model="product.description"
      :disabled="!isEditMode"
    />

    <label for="price">Precio:</label>
    <input
      type="number"
      name="price"
      id="price"
      min="0"
      step="any"
      oninput="validity.valid||(value='');"
      v-model="product.price"
      :disabled="!isEditMode"
    />

    <label for="category">Categoría:</label>

    <select id="category" name="category" v-model="product.category">
      <option value="1">Prueba</option>
    </select>

    <br />
    <button v-on:click="updateProduct" v-show="isEditMode">Editar</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isEditMode: false,
      product: {
        id: "",
        name: "",
        description: "",
        price: 0,
        category: 1
      }
    };
  },
  methods: {
    updateProduct: function() {
      this.$store
        .dispatch("updateProduct", this.product)
        .then(result => {
          console.log(result);
          this.isEditMode = false;
          alert("El producto se ha actualizado.");
        })
        .catch(error => {
          console.log(error);
          alert("No se puede actualizar el productor.");
        });
    }
  },
  mounted() {
    let product = this.$store.state.productModule.product;

    console.log(product);
    this.product.id = product.id;
    this.product.name = product.name;
    this.product.description = product.description;
    this.product.price = product.price;
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