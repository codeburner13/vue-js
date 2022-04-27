<template>
<div>
  <div class="display">
  <input v-model.number="operand1">
  <input v-model.number="operand2">
  = {{result}}
  </div>
  <div class="keyboard">
    <button @click="result = operand1 + operand2">+</button>
    <button @click="result = operand1 - operand2">-</button>
    <button @click="calculate('/')" :disabled="operand2===0">/</button>
    <button @click="result = operand1 * operand2">*</button>
    <button @click="result = operand1 ** operand2">x^y</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'CalCool',
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result:0,
      error: "",
    };
  },
  methods: {
    div() {
      this.result = Math.round(this.operand1 / this.operand2)
    },
    calculate(operation = "+") {
      switch(operation) {
        case '/':
          this.div()
          break;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
