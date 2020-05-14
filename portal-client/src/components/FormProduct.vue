<template>
  <main class="form">
    <div class="title">
      <span>Nuevo producto</span>
    </div>

    <label for="name">Nombre:</label>
    <input type="text" name="name" id="name" />

    <label for="description">Descripción:</label>
    <input type="text" name="description" id="description" />

    <label for="price">Precio:</label>
    <input type="number" name="price" id="price" />

    <label for="category">Categoría:</label>

    <select id="category" name="category">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>

    <br />
    <button>Guardar</button>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  border: 1px solid #dddddd;
  padding: 5px;
}
</style>