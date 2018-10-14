<template> <!--<template>-->
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" @whenNameReset="name = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
//<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  data() {
    return {
      name: "Lee"
    };
  },
  methods: {
    changeName() {
      this.name = "Aunyx";
    }
  }
};
</script>

<style scoped>
/*<style>>*/
div {
  background-color: lightblue;
}
</style>
