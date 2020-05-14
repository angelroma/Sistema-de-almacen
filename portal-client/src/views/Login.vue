

<template>
  <main class="login">
    <div class="login-form">
      <h1>Sistema Gestor De Almacén</h1>
      <div class="login-form-input">
        <label for="email">Correo Electrónico:</label>
        <input type="text" name="email" id="email" />
        <br />
        <label for="password">Contraseña:</label>
        <input type="password" name="password" id="password" />
        <br />
        <br />
        <button v-on:click="login">Entrar</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      test: "Angel"
    };
  },
  methods: {
    login: function(data) {


      
      console.log("There is a login here " + data);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  margin-top: 50px;
  background-color: rgb(196, 196, 196);
  padding: 50px;
  border: 5px double #dddddd;
}
.login-form-input {
  display: flex;
  flex-direction: column;
}
</style>