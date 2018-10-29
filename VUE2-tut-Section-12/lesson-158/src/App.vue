<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built In Directives</h1>
        <p v-text="'v-text example'"></p>
        <p v-html="'<strong>v-html example</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight>Custom directive example (green highlight)</p>
 
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>