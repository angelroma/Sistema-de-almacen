<template>
  <nav>
    <router-link to="/productos">Productos</router-link>
    <router-link to="/reportes">Reportes</router-link>
    <router-link to="/inventario">Inventario</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  background-color: #5f5f5f;
}

a {
  padding: 10px;
  text-decoration: none;
  color: #fff;
  font-size: 20px;

  &:hover {
      background-color: #333333;
  }
}
</style>