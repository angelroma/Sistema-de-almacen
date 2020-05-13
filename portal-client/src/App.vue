<template>
  <div id="app">
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
//Normalization
@import "App.scss";

body {
  background-color: #e9ebee;
}
</style>
  