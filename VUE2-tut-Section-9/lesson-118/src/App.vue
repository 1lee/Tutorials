<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <app-quote quote="a wonderful quote">
<h2 slot="title">A Quote Happens...</h2>
<p slot="content">a wonderful quote</p>
      </app-quote>
    </div>
  </div>
</div>

</template>

<script>
import Quote from "./components/Quote.vue";
export default {
  components: {
    "app-quote": Quote
  }
};
</script>

<style scoped>
</style>
