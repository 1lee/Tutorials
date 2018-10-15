<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
    </div>

</template>

<script>
export default {
  data() {
    return {
      activeServers: [
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
