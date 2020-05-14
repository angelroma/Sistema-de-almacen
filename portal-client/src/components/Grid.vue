<template>
  <div class="grid">
    <div class="title">
      <span>Lista de productos</span>
    </div>
    <div class="status" v-if="isDesactivating">
      <span>Cargando...</span>
    </div>
    <table>
      <tr>
        <th>#</th>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Activo</th>
        <th>Fecha de creación</th>
      </tr>

      <tr v-for="item in this.$store.state.productModule.productList" :key="item.id">
        <td>
          <a href="#" v-on:click="viewProduct(item)">Ver</a>-
          <a href="#" v-on:click="desactivate(item.id)">Desactivar</a>
        </td>
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.description}}</td>
        <td>{{item.price}}</td>
        <td>{{item.active}}</td>
        <td>{{item.createdOn}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDesactivating: false
    };
  },
  methods: {
    desactivate: function(id) {
      this.isDesactivating = true;
      let payload = {
        id: id
      };
      this.$store.dispatch("desactivateProduct", payload).then(result => {
        this.isDesactivating = false;
        console.log(result);
      });
    },
    viewProduct: function(product) {
      this.$store.dispatch("getProductById", product);
    }
  },

  mounted() {
    this.$store.dispatch("getProductAll");
  }
};
</script>

<style lang="scss" scoped>
.grid {
  padding: 5px;
  border: 1px solid #dddddd;
}
table {
  border-collapse: collapse;
  width: 100%;
  padding: 5px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.status {
  text-align: center;
}
</style>