<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">Stock Trader</router-link>

  <ul class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="nav navbar-nav">

      <router-link class="nav-item active" tag="li" to="/portfolio" activeClass="active">
        <a>Portfolio</a>
      </router-link>

      <router-link class="nav-item active" tag="li" to="/stocks" activeClass="active">
        <a>Stocks</a>
      </router-link>

    </ul>
    <strong class="navbar-text navbar-right">Funds: {{ funds }}</strong>
    <ul class="nav navbar-nav navbar-right">
        <li><a href="#">End Day</a></li>
        <li class="dropdown">
        <a class="dropdown-toggle" 
        href="#" id="navbarDropdown" 
        role="button" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false">
          Save & Load
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li class="dropdown-item"><a href="#">Save Data</a></li>
          <li class="dropdown-item"><a href="#">Load Data</a></li>

        </ul>
      </li>
      </ul>
  </ul>
</nav>
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
