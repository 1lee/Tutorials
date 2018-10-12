<template>
    <div class="container">
<ex-header></ex-header>
        <hr>
<ex-dashboard></ex-dashboard>
        <hr>
<ex-footer></ex-footer>
    </div>
</template>

<script>
import Header from "./Header.vue";
import Dashboard from "./Dashboard.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    "ex-header": Header,
    "ex-dashboard": Dashboard,
    "ex-footer": Footer
  }
};
</script>

<style>
</style>
