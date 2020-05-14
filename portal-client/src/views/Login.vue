<template>
  <main class="login">
    <div class="login-form">
      <h1>Sistema Gestor De Almacén</h1>
      <div class="login-form-input">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Tu correo electrónico"
          v-model="data.email"
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Tu contraseña"
          v-model="data.password"
        />
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
      data: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login: function() {
      let email = this.data.email;
      let password = this.data.password;

      if (email === null || email === "") {
        return;
      }

      if (password === null || password === "") {
        return;
      }

      let payload= {user: "Login"};

      this.$store.dispatch("login", payload).then(response => {
        console.log(response);
      });
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