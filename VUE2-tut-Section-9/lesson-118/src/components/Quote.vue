<template>
<div>
<slot name="title"></slot>

<span style="color: #ccc"><slot name="subtitle">subtitle</slot></span>

<slot name="content"></slot>
</div>
</template>

<script>
export default {
  props: ["quote"]
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
</style>