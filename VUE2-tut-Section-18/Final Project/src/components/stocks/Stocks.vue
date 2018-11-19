<template>
    <div>
     <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock">{{ stock.name }}</app-stock>

    </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  components: {
    appStock: Stock
  },
  data() {
    return {
      stocks: [
        { id: 1, name: "KRUSTY CRAB", price: 12 },
        { id: 2, name: "MOES", price: 75 },
        { id: 3, name: "BUBBAGUMP", price: 175 },
        { id: 4, name: "BLAMMO", price: 17 }
      ]
    };
  }
};
</script>

<style>
</style>