<template>
  <nav>
    <div>
      <router-link to="/productos">Productos</router-link>
      <router-link to="/reportes">Reportes</router-link>
      <router-link to="/inventario">Inventario</router-link>
      <router-link to="/usuarios">Usuarios</router-link>
    </div>
    <div>
      <router-link to="/cuenta">Mi cuenta</router-link>
      <a href="#" v-on:click="logout">Cerrar Sesión</a>
    </div>
  </nav>
</template>

<script>
export default {

  methods:{
    logout: function(){
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  background-color: #5f5f5f;
  margin-bottom: 30px;
  justify-content: space-between;
}

div, a {
  padding: 10px;
  text-decoration: none;
  color: #fff;
  &:hover {
    background-color: #333333;
    color: #fff;
  }
}
</style>