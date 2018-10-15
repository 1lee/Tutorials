import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  methods: {
    resetStatus(status) {
      this.$emit("changedStatus", status);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
