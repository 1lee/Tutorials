<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
             <app-server v-for="server in servers" :key="server.id" :id="server.id"></app-server>
        </ul>
    </div>
</template>

<script>
import { Server } from "./Server.vue";

export default {
  name: "Servers",
  components: {
    "app-server": Server
  },
  data() {
    return {
      servers: [
        { id: 1001, status: "Normal" },
        { id: 1002, status: "Elevated" },
        { id: 1003, status: "Attention" },
        { id: 1004, status: "Critical" },
        { id: 1005, status: "Normal" }
      ]
    };
  }
};
</script>

<style>
</style>
