<template>
  <div class="grid">
    <div class="title">
      <span>Lista de usuarios</span>
    </div>
    <table>
      <tr>
        <th>#</th>
        <th>ID</th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Teléfono</th>
        <th>Fecha de creación</th>
      </tr>
      <tr>
        <td>
          <a href="#">Editar</a> -
          <a href="#">Borrar</a>
        </td>
        <td>
          <a href="#">43234</a>
        </td>
        <td>Italy</td>
        <td>Italy</td>
        <td>Italy</td>
        <td>Italy</td>
      </tr>
      <tr>
        <td>
          <a href="#">Editar</a> -
          <a href="#">Borrar</a>
        </td>
        <td>
          <a href="#">1231</a>
        </td>
        <td>Italy</td>
        <td>Italy</td>
        <td>Italy</td>
        <td>Italy</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
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
</style>