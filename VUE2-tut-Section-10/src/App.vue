<template>
    <div class="container">
      <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quotes v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</app-quotes>
    <div class="row">
        <div class="col-sm-12 text-center">
            <div class="alert alert-info">
                Info: Click on a quote to delete it
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import NewQuote from "./components/NewQuote.vue";
import Quotes from "./components/Quotes.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    appQuotes: Quotes,
    appNewQuote: NewQuote,
    appHeader: Header
  },
  data() {
    return {
      maxQuotes: 10,
      quotes: ["butterfly", "mickey mouse", "a default placeholder quote"]
    };
  },
  methods: {
    newQuote(quote) {
      this.quotes.push(quote);
      if (this.quotes.length >= this.maxQuotes) {
        alert("Max Quotes Exceeded! Please delete a quote to continue.");
      }
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
