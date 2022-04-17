<template>
<div>
  <div class="display">
  <input v-model.number="operand1">
  <input v-model.number="operand2">
  = {{result}}
  </div>
  <div class="keyboard">
    <button v-on:click="result = operand1 + operand2" >+</button>
    <button v-on:click="result = operand1 - operand2">-</button>
    <button @click="result = !operand1 / operand2">/</button>
    <button @click="result = operand1 * operand2">*</button>
    <button @click="result = operand1 ** operand2">x^y</button>
    <button @click="result = ~~ (operand1 / operand2)">div</button>
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
      result:0
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
