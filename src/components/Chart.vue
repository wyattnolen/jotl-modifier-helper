<template>
  <div class="chart">
    <h2 class="chart__title title">Modifier Graph</h2>
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
    "title title"
    "x chart"
    ".  y";
  grid-template-columns: 10% 90%;
  grid-template-rows: 10% 80% 10%;
  height: 100%;
  @media (min-width: $sm) {
    grid-template-areas:
      "title title"
      "y chart"
      ".  x";
    grid-template-columns: 10% 90%;
    grid-template-rows: 10% 80% 10%;
    column-gap: 20px;
  }

  &__title {
    grid-area: title;
  }
  &__axis {
    display: flex;
    padding: 0;
    margin: 0;
    &--y {
      flex-direction: row-reverse;
      justify-content: space-between;
      grid-area: y;
      @media (min-width: $sm) {
        flex-direction: column;
        justify-content: space-between;
        margin: 0;
        line-height: 0;
        align-items: flex-end;
      }
    > li {
      flex-basis: 20%;
      &:nth-child(1) {
        text-align: right;
      }
      &:nth-child(2) {
        text-align: right;
      }
      &:nth-child(3) {
        text-align: center;
      }
      &:nth-child(4) {
        text-align: left;
      }
      &:nth-child(5) {
        text-align: left;
      }
        @media (min-width: $sm) {
          flex-basis: auto;
          margin: 0;
          line-height: 0;
        }
      }
    }
    &--x {
      flex-direction: column;
      justify-content: space-between;
      grid-area: x;
      @media (min-width: $sm) {
        flex-direction: row;
        justify-content: space-around;
      }

      > li {
        margin: 10px 0;
        @media (min-width: $sm) {
          margin: 0;
        }
      }
    }

    > li {
      list-style: none;
    }
  }
  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
        background: repeating-linear-gradient(
          to right,
      transparent 24.5%,
      transparent 49.5%,
      $pri 50%,
      $pri 50%);
        @media (min-width: $sm) {
              background: repeating-linear-gradient(
      transparent 24.5%,
      transparent 49.5%,
      $pri 50%,
      $pri 50%);
        }

    border-left: 1px solid $pri;
    border-bottom: 1px solid $pri;
    grid-area: chart;

    @media (min-width: $sm) {
      flex-direction: row;
      align-items: flex-end;
    }
  }
  &__bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: var(--percent);
    min-height: 40px;
    margin: 10px 0;

    @media (min-width: $sm) {
      justify-content: flex-start;
      align-items: center;
      width: auto;
      height: var(--percent);
      min-width: 40px;
      margin: 0;
    }

    &--positive {
      background-color: $positive;
    }
    &--negative {
      background-color: $negative;
    }
    > p {
      margin: 0;
      margin-right: -30px;
      @media (min-width: $sm) {
        margin-right: 0;
        margin-top: -30px;
      }
    }
  }
}
</style>
