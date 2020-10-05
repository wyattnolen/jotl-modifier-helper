<template>
  <div class="chart">
    <div class="chart__inner">
      <div
        v-for="data in getChartData"
        :key="data"
        class="chart__bar"
        :class="[
          data.type == 'positive'
            ? 'chart__bar--positive'
            : 'chart__bar--negative',
        ]"
        :style="{ '--percent': data.percent + '%' }"
      >
        <p>{{ data.percent }}</p>
      </div>
    </div>
    <ul class="chart__axis chart__axis--y">
      <li>100%</li>
      <li>75%</li>
      <li>50%</li>
      <li>25%</li>
      <li>0%</li>
    </ul>
    <ul class="chart__axis chart__axis--x">
      <li v-for="modifier in uniqueModifiers" :key="modifier">
        {{ modifier }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Perks",
  props: {
    deck: Array,
    deckLength: Number,
    uniqueModifiers: Array,
  },
  data: function() {
    return {};
  },
  computed: {
    getChartData() {
      let chartData = [];
      this.uniqueModifiers.forEach((modifier) => {
        let numItems = this.deck.filter((card) => card === modifier);
        let percentage = (numItems.length * 100) / this.deckLength;
        chartData.push({
          modifier: modifier,
          percent: parseFloat(percentage.toFixed(2)),
          type: this.determineType(modifier),
        });
      });
      return chartData;
    },
  },
  methods: {
    determineType(modifier) {
      let type = "";
      if (modifier >= 0 || modifier == "x2") {
        type = "positive";
      } else if (modifier < 0 || modifier == "x0") {
        type = "negative";
      }
      return type;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/_shared.scss";

.chart {
  display: grid;
  grid-template-areas:
    "y chart"
    ".  x";
  grid-template-columns: 10% 90%;
  grid-template-rows: 90% 10%;
  grid-area: chart;
  width: 80vw;
  height: 80vh;
  &__axis {
    display: flex;
    padding: 0;
    margin: 0;
    &--y {
      flex-direction: column;
      justify-content: space-between;
      grid-area: y;
    }
    &--x {
      flex-direction: row;
      justify-content: space-around;
      grid-area: x;
    }
    > li {
      list-style: none;
    }
  }
  &__inner {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
  }
  &__bar {
    height: var(--percent);
    &--positive {
      background-color: green;
    }
    &--negative {
      background-color: red;
    }
  }
}
</style>
