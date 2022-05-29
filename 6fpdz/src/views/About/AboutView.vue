<template>
  <div class="about">
    <h1>Nothing here right now, sorry</h1>
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Food'}, query: {value: 200}}">добавить платеж категории Food с ценой 200</router-link>
    <br>
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Transport'}, query: {value: 50}}">добавить платеж категории Transport с ценой 50</router-link>
    <br>
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Entertainment'}, query: {value: 2000}}">добавить платеж категории Entertainment с ценой 2000</router-link>
  </div>
</template>

<script>

</script>