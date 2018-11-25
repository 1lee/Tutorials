<template>
<div>
    <h1>View Portfolio or Trade Stocks</h1>
    <h6>You may SAVE or LOAD data</h6>
    <h6>Click on 'END DAY' to begin a new day</h6>
    <hr>
    <p>Your funds: {{ funds }}</p>
    </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style>
</style>
