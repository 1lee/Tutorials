<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <h3>Sign Up Form</h3>
                    <hr>
                    <div class="input-fields" v-if="userData.submitted == false">
                        <!--
<div class="form-group">

<label for="firstname">First Name</label>
<input type="text"
        id="firstname"
        class="form-control"
        v-model="userData.firstName"
>
<hr>
<div class="form-group">
<label for="lastname">Last Name</label>
<input type="text"
        id="lastname"
        class="form-control"
        v-model="userData.lastName"
>
</div>
-->
                        <name-control @onNameChanged="userData.fullName = $event"></name-control>

                        <hr>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" class="form-control" v-model="userData.email">
                        </div>
                        <hr>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="text" id="password" class="form-control" v-model="userData.password">
                        </div>
                        <hr>
                        <div class="row">
                            <div class="form-group">
                                <label for="storage">
                                    <input type="radio" id="dataSave" value="true" v-model="userData.save"> Save?

                                </label>
                                <label for="storage">
                                    <input type="radio" id="dataDiscard" value="false" v-model="userData.save">
                                    Discard?

                                </label>

                                <button class="btn btn-primary" @click.prevent="userData.submitted = true">Submit!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Exercise 2 -->
                <!-- Only display the Form if it has NOT been submitted -->
                <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                <!-- Exercise 3 -->
                <!-- Edit the Example from above and create a custom "Full Name" Control -->
                <!-- which still holds the First Name and Last Name Input Field -->
            </div>
    
    </form>
    
    <hr>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4>Your Data</h4>
                </div>
                <div class="panel-body">
                    <p>Full Name: {{ userData.fullName }}</p>
                    <p>Mail: {{ userData.email }}</p>
                    <p>Password: {{ userData.password }}</p>
                    <p>Store in Database?: {{ userData.save }}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import NameControl from "./FullNameControl.vue";

export default {
  components: {
    nameControl: NameControl
  },
  data() {
    return {
      userData: {
        fullName: "",
        email: "john@example.com",
        password: "secret",
        save: true,
        submitted: false
      }
    };
  },
  methods: {
    submitForm() {
      this.userData.submitted = true;
    }
  }
};
</script>

<style>
</style>