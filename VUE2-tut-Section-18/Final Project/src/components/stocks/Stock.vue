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
        :class="{danger: insufficientFunds}"
        placeholder="Quantity"
        v-model="quantity"/>
        
    </div>
    <div class="pull-right">
        <button
        class="btn btn-success"
        @click="buyStock"
        :disabled="insufficientFunds || quantity <= 0 || !isInt(quantity)"

        >{{ insufficientFunds ? "Insufficient" : "BUY" }}
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
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
    isInt(n) {
      return n % 1 === 0;
    }
  }
};
</script>
<style scoped>
.danger {
  border: 1px solid red;
}
</style>
