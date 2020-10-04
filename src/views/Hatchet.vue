<template>
  <article>
    {{ deck }}
    <section class="graph">
      <div class="graph__inner">
        <div
          v-for="data in getPercentages"
          :key="data"
          class="graph__bar"
          :style="{ '--percent': data.percent + '%' }"
        >
          <p>Modifer {{ data.modifier }}</p>
          <p>Percentage {{ data.percent }}</p>
        </div>
      </div>
      <ul class="graph__axis graph__axis--y">
        <li>100%</li>
        <li>75%</li>
        <li>50%</li>
        <li>25%</li>
        <li>0%</li>
      </ul>
      <ul class="graph__axis graph__axis--x">
        <li v-for="modifier in getUniqueValues" :key="modifier">
          {{ modifier }}
        </li>
      </ul>
    </section>
    <p @click="test()">test</p>
  </article>
</template>

<script>
// import PlayerBoard from "@/components/PlayerBoard.vue";

export default {
  name: "Hatchet",
  components: {
    // PlayerBoard
  },
  data: function() {
    return {
      deck: [0, 1, 1],
      perks: [],
      selectedPerks: [],
    };
  },
  computed: {
    getTotalAmount() {
      return this.deck.length;
    },
    getUniqueValues() {
      return [...new Set(this.deck)];
    },
    getPercentages() {
      let chartData = [];
      this.getUniqueValues.forEach((modifier) => {
        let numItems = this.deck.filter((card) => card === modifier);
        let percentage = (numItems.length * 100) / this.getTotalAmount;
        chartData.push({ modifier: modifier, percent: percentage });
      });
      return chartData;
    },
  },
  created() {
    // this.determinePercentages();
  },
  watch: {},
  methods: {
    test() {
      this.deck.push("1");
    },
  },
};
</script>

<style lang="scss">
span {
  font-weight: bold;
}
.graph {
  display: grid;
  grid-template-areas:
    "y chart"
    ".  x";
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
    grid-area: chart;
  }
  &__bar {
    height: var(--percent);
    background-color: green;
  }
}
</style>
