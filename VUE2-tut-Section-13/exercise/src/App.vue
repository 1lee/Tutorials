<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
<h3>Exercise 1 (reverse text)</h3>
<p>Enter text to reverse</p>
<input v-model="textToReverse">
<p>{{ textToReverse | reverse }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
<h3>Exercise 2 - Global Filter - (append length)</h3>
<p>Input to get letter count</p>
<input v-model="textToCount">
<p>{{ textToCount | appendLength }}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
<h3>Exercise 3 - Computed Properties (Same as above)</h3>
<p>Enter text to reverse</p>
<input v-model="computedTextReversed">
<p>{{ reverseText }}</p>

<h3>Exercise 3b - (append length - computed)</h3>
<p>Input to get letter count</p>
<input v-model="computedTextToCount">
<p>{{  computedWordCount }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
<h3>Exercise 4 - (Exercise 2 as a Mixin)</h3>
<p>Input to get letter count</p>
<input v-model="mixinTextToCount">
<p>{{ mixinWordCount }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mixinExercise } from "./MixinExercise";

export default {
  data() {
    return {
      textToReverse: "",
      textToCount: "",
      computedTextReversed: "this is computed",
      computedTextToCount: ""
    };
  },
  mixins: [mixinExercise],
  filters: {
    reverse(data) {
      return data
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    reverseText() {
      return this.computedTextReversed
        .split("")
        .reverse()
        .join("");
    },
    computedWordCount() {
      return (
        this.computedTextToCount + " (" + this.computedTextToCount.length + ")"
      );
    }
  }
};
</script>

<style>
</style>
