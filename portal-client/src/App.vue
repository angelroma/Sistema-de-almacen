<template>
  <div id="app" class="container">
    <Navigation v-if="this.$store.state.userModule.user !== null" />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation
  },
  mounted() {
    // console.log(process.env.VUE_APP_URL);
  }
};
</script>

<style lang="scss">
@import "App.scss";

body {
  background-color: #e9ebee;
}

#app {
  margin-top: 20px;
}

.title {
  background-color: #6d6d6e;
  padding: 5px;
  text-align: center;
  color: #fff;
}
</style>
  