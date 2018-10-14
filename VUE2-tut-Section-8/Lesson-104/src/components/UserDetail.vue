<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <h3> {{ reverseName() }} </h3>
        <button @click="resetName">Reset Name</button>
        <p>Many Details</p>
        
    </div>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    reverseName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "Lee";
      this.$emit("whenNameReset", this.name);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
