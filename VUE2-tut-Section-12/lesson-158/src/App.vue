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
        <p v-highlight:background.delayed="'yellow'">Custom directive example(global)</p>
 
         <p v-local-highlight:background.delayed.blink="'yellow'">Custom directive example(local) </p>
         
         <p v-local-highlight:background.blink="{mainColor: 'pink', secondColor: 'lightblue', delay: 500}">Custom directive example(local) - with complex values </p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    localHighlight: {
      bind(el, binding, vnode) {
        let delay = 0;

        if (binding.modifiers["delayed"]) {
          delay = 2000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor == mainColor
                ? (currentColor = secondColor)
                : (currentColor = mainColor);

              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
            //adjusting styling according to passed arguments after directive
          }, delay);
        } else {
          setTimeout(() => {
            //adjusting styling according to passed arguments after directive
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.secondColor;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>