<template>
<div>
  <div class="display">
  <input  v-model.number="operand1">
  <input  v-model.number="operand2">
  = {{result}}
  </div>
  <div class="keyboard">
    <button v-for="operand in operands" 
    v-bind:key="operand"
    v-bind:title="operand" 
    @click="calculate(operand)">
    {{operand}}
    </button>
  </div>
  <div v-for="(log,id) in logs" v-bind:key="id">{{log}}</div>
  <br>
  <br>
  <br>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">Отобразить экранную клавиатуру</label>
  <br>
  <br>
   <div v-show="checked">
  <div class="numb">
  <button v-for="numb in numbs" v-bind:key="numb" @click="check(numb)">{{ numb }}</button>
  <button  @click="del()" :value="operand1">Delete</button>
  </div>
  <br>
  <div id="zero">
  <input  name="choise" type="radio" id="one"  :value="operand1" v-model="picked" >
  <label for="one">Операнд 1</label>
  <input  name="choise" type="radio" id="two" :value="operand2" v-model="picked">
  <label for="two">Операнд 2</label>
  </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'CalCool',
  
  data() {
    return {
      operands: ['+', '-', '*', '/', 'x^y'],
      operand1: '',
      operand2: '',
      result: 0,
      numbs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      error: "",
      logs: {},
      checked: false,
      picked: "",
    };
  },
  methods: {
    calculate(operation = "+") {
      switch(operation) {
        case '/':
          this.div()
          break;
          case '+':
          this.sum()
          break;
          case '-':
          this.sub()
          break;
          case '*':
          this.mult()
          break;
          case 'x^y':
          this.root()
          break;
      }
      const key = Date.now()
      const value = `${this.operand1}${operation}${this.operand2}=${this.result}`
      Vue.set(this.logs, key, value)
    },
    div() {
      this.result = Math.round(this.operand1 / this.operand2)
    },
    sum() {
      this.result = (+this.operand1) + (+this.operand2)
    },
    sub() {
      this.result = this.operand1 - this.operand2
    },
    mult() {
      this.result = this.operand1 * this.operand2
    },
    root() {
      this.result = this.operand1 ** this.operand2
    },
    check (num) {
      if (this.operand1 === '' && num === '0') {
        return this.error
      } else if (this.operand2 === '' && num === '0') {
        return this.error
      } else if (this.picked === this.operand1) {
        this.operand1 += num
      } else if (this.picked === this.operand2) {
        this.operand2 += num
      }
    },
    del () {
      if ((this.picked === this.operand1) & (!isNaN(this.operand1[this.operand1.length - 1])))
      {
      this.operand1 = this.operand1.substring(0, this.operand1.length - 1)}
      else if ((this.picked === this.operand2)&(!isNaN(this.operand2[this.operand2.length - 1])))
      {
        this.operand2 = this.operand2.substring(0, this.operand2.length - 1)
      }
    }, 
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
