<template>
<div>
  <button @click="visible=!visible">ADD COST +</button>
  <div v-show="visible" class="form-wrapper">
    <input v-model="date"  placeholder="date"/>
    <select v-model="category" v-if="categoryList">
      <option v-for="(value, idx) in categoryList" :key="idx">{{value}}</option>
    </select>
    <input v-model.number="value" placeholder="value"/>
    <button @click="onClickSave">Save</button>
  </div>
  
  </div>
</template>
<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      date: "",
      category: "",
      value: "",
      visible: false
    }
  },
  computed: {
    getCurrentDate(){
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth()+1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    }
  },
  methods: {
    onClickSave(){
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value
      }
      this.$store.commit('addDataToPaymentsList', data)
    }
  },
  async created() {
    await this.$store.dispatch('fetchCategoryList')
  },
  mounted() {
  },
}
</script>