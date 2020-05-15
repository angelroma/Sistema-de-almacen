<template>
  <main class="form">
    <div class="title">
      <span>Nuevo usuario</span>
    </div>

    <label for="name">Nombre de usuario:</label>
    <input type="text" name="username" id="username" v-model="item.username" />

    <label for="name">Nombre:</label>
    <input type="text" name="name" id="name" v-model="item.firstName" />

    <label for="middleName">Apellido Paterno:</label>
    <input type="text" name="middleName" id="middleName" v-model="item.middleName" />

    <label for="lastName">Apellido Materno:</label>
    <input type="text" name="lastName" id="lastName" v-model="item.lastName" />

    <label for="gender">Genero:</label>
    <select id="gender" name="gender" v-model="item.gender">
      <option value="Masculino">Masculino</option>
      <option value="Femenino">Femenino</option>
      <option value="Otro">Otro</option>
    </select>

    <label for="email">Correo electrónico:</label>
    <input type="text" name="email" id="email" v-model="item.email" />

    <label for="phone">Teléfono:</label>
    <input type="text" name="phone" id="phone" v-model="item.phoneNumber" />

    <label for="password">Contraseña:</label>
    <input type="password" name="password" id="password" v-model="item.password" />

    <label for="passwordAgain">Repetir contraseña:</label>
    <input type="password" name="passwordAgain" id="passwordAgain" v-model="item.passwordAgain" />

    <label for="rol">Rol:</label>

    <select id="rol" name="rol" v-model="item.roleId">
      <option value="1">Admin</option>
      <option value="2">Almacen</option>
      <option value="3">Dueño</option>
    </select>

    <br />
    <button v-on:click="add">Guardar</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      item: {
        username: "Test",
        firstName: "Test",
        middleName: "Test",
        lastName: "Test",
        gender: "Masculino",
        email: "test@email.com",
        phoneNumber: "3323231233",
        password: "Secure!30",
        passwordAgain: "Secure!30",
        roleId: "1"
      }
    };
  },
  methods: {
    add: function() {
      let username = this.item.username;
      let firstName = this.item.firstName;
      let middleName = this.item.middleName;
      let lastName = this.item.lastName;
      let gender = this.item.gender;
      let email = this.item.email;
      let phoneNumber = this.item.phoneNumber;
      let password = this.item.password;
      let passwordAgain = this.item.passwordAgain;
      let roleId = this.item.roleId;

      if (username === null || username === "") {
        return;
      }
      if (firstName === null || firstName === "") {
        return;
      }
      if (middleName === null || middleName === 0) {
        return;
      }
      if (lastName === null || lastName === "") {
        return;
      }
      if (gender === null || gender === "") {
        return;
      }
      if (email === null || email === "") {
        return;
      }
      if (phoneNumber === null || phoneNumber === "") {
        return;
      }
      if (password === null || password === "") {
        return;
      }
      if (passwordAgain === null || passwordAgain === "") {
        return;
      }
      if (roleId === null || roleId === "") {
        return;
      }

      this.$store
        .dispatch("createUser", this.item)
        .then(result => {
          this.item.username = "";
          this.item.firstName = "";
          this.item.middleName = "";
          this.item.lastName = "";
          this.item.gender = "Masculino";
          this.item.email = "";
          this.item.phoneNumber = "";
          this.item.password = "";
          this.item.passwordAgain = "";
          this.item.roleId = 1;

          alert(result.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
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