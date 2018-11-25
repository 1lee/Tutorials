<template>
<div class="col-md-4 col-sm-6">
<div class="panel panel-info">
<div class="panel-heading">
    <h3 class="panel-title">
        {{ stock.name }}
        <small>
            (Price ${{ stock.price }} | Quantity {{ stock.quantity }}) 
        </small>
    </h3>
</div>
<div class="panel-body">
    <div class="pull-left">
        <input
        type="number"
        class="form-control"
        :class="{danger: insufficientQuantity}"
        placeholder="Quantity"
        v-model="quantity"/>
        
    </div>
    <div class="pull-right">
        <button
        class="btn btn-success"
        @click="sellStock"
        :disabled="insufficientQuantity || quantity <= 0 || !isInt(quantity)"

        >{{ insufficientQuantity ? "Insufficient Qty" : "SELL"}}
        </button>
    </div>
</div>
</div>
</div>
    </template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({ placeSellOrder: "sellStock" }),

    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.stock.quantity
      };

      this.placeSellOrder(order);
      this.quantity = 0;
    },
    isInt(number) {
      if (number % 1 == 0) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
