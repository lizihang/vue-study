<template>
  <div>
    <h1 class="title">{{message}}</h1>
    <button @click="btnClick">按钮</button>
    <cpn></cpn>
  </div>
</template>

<script>
  import Cpn from "./Cpn.vue";

  export default {
    name: "App",
    data() {
      return {
        message: "hello vue!!! app.vue"
      }
    },
    methods: {
      btnClick() {
        console.log("btnClick!");
      }
    },
    components: {
      Cpn
    }
  }
</script>

<style scoped>
  .title {
    color: green;
  }
</style>