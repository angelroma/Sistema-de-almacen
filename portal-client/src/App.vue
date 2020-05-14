<template>
  <div id="app" class="container">
    <Navigation></Navigation>
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation
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
  background-color: #6D6D6E;
  padding: 5px;
  text-align: center;
  color: #fff;
}
</style>
  