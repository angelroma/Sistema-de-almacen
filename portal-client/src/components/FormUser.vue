<template>
  <main class="form">
    <div class="title">
      <span>Nuevo usuario</span>
    </div>

    <label for="name">Nombre:</label>
    <input type="text" name="name" id="name" />

    <label for="middleName">Apellido Paterno:</label>
    <input type="text" name="middleName" id="middleName" />

    <label for="lastName">Apellido Materno:</label>
    <input type="text" name="lastName" id="lastName" />

    <label for="gender">Genero:</label>
    <select id="gender" name="gender">
      <option value="male">Masculino</option>
      <option value="Almacen">Femenino</option>
      <option value="Dueño">Otro</option>
    </select>

    <label for="email">Correo electrónico:</label>
    <input type="text" name="email" id="email" />

    <label for="phone">Teléfono:</label>
    <input type="text" name="phone" id="phone" />

    <label for="password">Contraseña:</label>
    <input type="password" name="password" id="password" />

    <label for="passwordAgain">Repetir contraseña:</label>
    <input type="password" name="passwordAgain" id="passwordAgain" />

    <label for="rol">Rol:</label>

    <select id="rol" name="rol">
      <option value="Admin">Admin</option>
      <option value="Almacen">Almacen</option>
      <option value="Dueño">Dueño</option>
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