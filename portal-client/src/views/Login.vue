<template>
  <main class="login">
    <div class="login-form">
      <h1>Sistema Gestor De Almacén</h1>

      <div v-show="isError" class="box-error">
        <span>{{errorMessage}}</span>
      </div>

      <div class="login-form-input">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Tu nombre de usuario"
          v-model="data.username"
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
        username: "admin",
        password: "Secure!31"
      },
      errorMessage: "",
      isError: false
    };
  },
  methods: {
    login: function() {
      let username = this.data.username;
      let password = this.data.password;

      if (username === null || username === "") {
        return;
      }

      if (password === null || password === "") {
        return;
      }

      this.$store.dispatch("login", this.data).then(result =>{
        console.time(result)
      }).catch(error =>{
        this.isError = true;
        this.errorMessage = error
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
.box-error {
  padding: 5px;
  margin-bottom: 5px;
  color:saddlebrown
}
</style>