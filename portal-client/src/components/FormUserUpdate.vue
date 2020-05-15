<template>
  <main class="form">
    <div class="title">
      <span>Detalles del usuario</span>
    </div>
    <br />
    <a href="#" v-on:click="isEditMode = !isEditMode">{{isEditMode === false? "Editar": "Cancelar"}}</a>
    <br />

    <label for="name">Nombre de usuario:</label>
    <input type="text" name="username" id="username" v-model="item.username" :disabled="!isEditMode" />

    <label for="name">Nombre:</label>
    <input type="text" name="name" id="name" v-model="item.firstName" :disabled="!isEditMode" />

    <label for="middleName">Apellido Paterno:</label>
    <input type="text" name="middleName" id="middleName" v-model="item.middleName" :disabled="!isEditMode" />

    <label for="lastName">Apellido Materno:</label>
    <input type="text" name="lastName" id="lastName" v-model="item.lastName" :disabled="!isEditMode" />

    <label for="gender">Genero:</label>
    <select id="gender" name="gender" v-model="item.gender" :disabled="!isEditMode">
      <option value="Masculino">Masculino</option>
      <option value="Femenino">Femenino</option>
      <option value="Otro">Otro</option>
    </select>

    <label for="email">Correo electrónico:</label>
    <input type="text" name="email" id="email" v-model="item.email" :disabled="!isEditMode" />

    <label for="phone">Teléfono:</label>
    <input type="text" name="phone" id="phone" v-model="item.phoneNumber" :disabled="!isEditMode" />

    <label for="password">Contraseña:</label>
    <input type="password" name="password" id="password" v-model="item.password" :disabled="!isEditMode" />

    <label for="passwordAgain">Repetir contraseña:</label>
    <input type="password" name="passwordAgain" id="passwordAgain" v-model="item.passwordAgain" :disabled="!isEditMode" v-show="isEditMode"/>

    <label for="rol">Rol:</label>

    <select id="rol" name="rol" v-model="item.roleId" :disabled="!isEditMode" >
      <option value="1">Admin</option>
      <option value="2">Almacen</option>
      <option value="3">Dueño</option>
    </select>
    <br />
    <button v-on:click="update" v-show="isEditMode">Editar</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isEditMode: false,
      item: {
        username: "",
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        email: "",
        phoneNumber: "",
        password: "",
        passwordAgain: "",
        roleId: "1"
      }
    };
  },
  methods: {
    update: function() {
      this.$store
        .dispatch("updateUser", this.item)
        .then(result => {
          console.log(result);
          this.isEditMode = false;
          alert("El producto se ha actualizado.");
        })
        .catch(error => {
          console.log(error);
          alert("No se puede actualizar el productor.");
        });
    }
  },
  mounted() {
    let item = this.$store.state.usersModule.user;

    console.log(item);
    this.item.id = item.id;
    this.item.username = item.username;
    this.item.firstName = item.firstName;
    this.item.middleName = item.middleName;

    this.item.lastName = item.lastName;

    this.item.gender = item.gender;
    this.item.email = item.email;
    this.item.phoneNumber = item.phoneNumber;
    this.item.password = item.password;
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