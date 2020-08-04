<template>
  <div>
    <h2 class="title">{{cmessage}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data() {
      return {
        cmessage: "这是个组件"
      }
    }
  }
</script>

<style scoped>
  .title {
    color: orange;
  }
</style>