<template>
  <div>
    <h1 class="title">{{message}}</h1>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
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
    }
  }
</script>

<style scoped>
  .title{
    color: green;
  }
</style>