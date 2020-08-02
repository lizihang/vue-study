export default {
  template: `
    <div>
      <h1>{{message}}</h1>
      <button @click="btnClick">按钮</button>
    </div>
  `,
  data() {
    return {
      message: "hello vue!!!"
    }
  },
  methods: {
    btnClick() {
      console.log("btnClick!");
    }
  }
}