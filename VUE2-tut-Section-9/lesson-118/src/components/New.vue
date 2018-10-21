<template>
<div>
    <h3>New Quote</h3>
    <p>Press the increase button an come back to see if this page re-created</p>
    <button @click="counter++">Increase</button>
    <h4>{{ counter }}</h4>
    </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  activated() {
    console.log("Activated!");
  },
  deactivated() {
    console.log("Deactivated!");
  },
  destroyed() {
    console.log("Destroyed!");
  }
};
</script>

<style>
</style>
