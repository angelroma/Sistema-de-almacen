<template>
  <main>
    <div class="row">
      <div class="col-md-8">
        <GridUser></GridUser>
      </div>
      <div class="col-md-4">
          <FormUser></FormUser>
      </div>
    </div>
  </main>
</template>

<script>
import GridUser from "@/components/GridUser";
import FormUser from "@/components/FormUser";
export default {
  components: {
    GridUser,
    FormUser
  }
};
</script>

<style>
</style>