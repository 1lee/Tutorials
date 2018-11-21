<template>
<div class="col-md-4 col-sm-6">
<div class="panel panel-succes">
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
        placeholder="Quantity"
        v-model="quantity"/>
        
    </div>
    <div class="pull-right">
        <button
        class="btn btn-success"
        @click="sellStock"
        :disabled="quantity <= 0 || !isInt(quantity)"

        >SELL
        </button>
    </div>
</div>
</div>
</div>
    </template>

<script>
import {mapActions} from 'vuex';

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions(["sellStock"]),

    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.stock.quantity
      };
    }
  }
};
</script>

<style>
</style>
