<template>
    <div class="container">
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quotes v-for="quote in quotes">{{ quote }}</app-quotes>
    </div>
</template>

<script>
import NewQuote from "./components/NewQuote.vue";
import Quotes from "./components/Quotes.vue";

export default {
  components: {
    appQuotes: Quotes,
    appNewQuote: NewQuote
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
    }
  }
};
</script>

<style>
</style>
