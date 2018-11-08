export const mixinExercise = {
  data() {
    return {
      mixinTextToCount: ""
    };
  },
  computed: {
    mixinWordCount() {
      return this.mixinTextToCount + " (" + this.mixinTextToCount.length + ")";
    }
  }
};
