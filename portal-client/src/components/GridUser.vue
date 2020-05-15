<template>
  <div class="grid">
    <div class="title">
      <span>Lista de usuarios</span>
    </div>
    <div class="status" v-if="isDesactivating">
      <span>Cargando...</span>
    </div>
    <table>
      <tr>
        <th>#</th>
        <th>ID</th>
        <th>Nombre de usuario</th>
        <th>Nombre</th>
        <th>Apellido Materno</th>
        <th>Apellido Paterno</th>
        <th>Correo Electrónico</th>
        <th>Teléfono</th>
        <th>Rol ID</th>
        <th>Fecha de creación</th>
      </tr>

      <tr v-for="item in this.$store.state.usersModule.userList" :key="item.id">
        <td>
          <a href="#" v-on:click="view(item)">Ver</a>-
          <a href="#" v-on:click="desactivate(item.id)">Desactivar</a>
        </td>
        <td>{{item.id}}</td>
        <td>{{item.username}}</td>
        <td>{{item.firstName}}</td>
        <td>{{item.middleName}}</td>
        <td>{{item.lastName}}</td>
        <td>{{item.email}}</td>
        <td>{{item.phoneNumber}}</td>
        <td>{{item.roleId}}</td>
        <td>{{item.createdOn}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDesactivating: false
    };
  },
  methods: {
    desactivate: function(id) {
      this.isDesactivating = true;
      let payload = {
        id: id
      };
      this.$store.dispatch("desactivateUser", payload).then(result => {
        this.isDesactivating = false;
        console.log(result);
      });
    },
    view: function(item) {
      this.$store.dispatch("getUserById", item);
    }
  },

  mounted() {
    this.$store.dispatch("getUserAll");
  }
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
.status {
  text-align: center;
}
</style>