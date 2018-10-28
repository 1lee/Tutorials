<template>
  <div>
    <div class="form-group">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" class="form-control" v-model="firstName" @keyup="emitFullName">
    </div>
    <hr>
    <div class="form-group">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" class="form-control" v-model='lastName' @keyup="emitFullName">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: ""
    };
  },
  methods: {
    emitFullName() {
      let fullName = this.firstName + " " + this.lastName;
      this.$emit("onNameChanged", fullName);
    }
  }
};
</script>

<style>
</style>