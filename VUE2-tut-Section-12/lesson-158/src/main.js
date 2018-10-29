import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.directive("highlight", {
  bind(el, binding) {
    // hard-coded color
    // el.style.backgroundColor = "lightgreen";

    //user directed color
    //el.style.backgroundColor = binding.value;

    let delay = 0;

    if (binding.modifiers["delayed"]) {
      delay = 2000;
    }

    setTimeout(() => {
      //adjusting styling according to passed arguments after directive
      if (binding.arg == "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
