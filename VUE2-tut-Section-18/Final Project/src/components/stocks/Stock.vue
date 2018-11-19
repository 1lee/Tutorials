<template>
<div class="col-md-4 col-sm-6">
<div class="panel panel-succes">
<div class="panel-heading">
    <h3 class="panel-title">
        {{ stock.name }}
        <small>
            (price ${{ stock.price }})
        </small>
    </h3>
</div>
<div class="panel-body">
    <div class="pull-left">
        <input
        type="number"
        class="form-control"
        placeholder="Quantity"
        v-model="quantity"/>
        
    </div>
    <div class="pull-right">
        <button
        class="btn btn-success"
        @click="buyStock"
        :disabled="quantity <= 0 || !isInt(quantity)"

        >BUY
        </button>
    </div>
</div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0
    };
  },
  props: ["stock"],
  methods: {
    buyStock() {
      const order = {
        id: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.quantity = 0;
    },
    isInt(n) {
      return n % 1 === 0;
    }
  }
};
</script>
<style>
</style>
