<template>
  <article class="helper">
    <section class="perks">
      <ul class="perks__list">
        <li class="perks__listItem" v-for="perk in perks" :key="perk.id">
          {{ determinePerkText(perk.effect) }}
        </li>
      </ul>
    </section>
    <section class="chart">
      <div class="chart__inner">
        <div
          v-for="data in getPercentages"
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
      deck: [
        "x0",
        "-2",
        "-1",
        "-1",
        "-1",
        "-1",
        "-1",
        "0",
        "0",
        "0",
        "0",
        "0",
        "1",
        "1",
        "1",
        "1",
        "2",
        "x2",
      ],
      specialEffects: [],
      perks: [
        { id: "1", effect: "1" },
        { id: "2", effect: "1" },
        { id: "3", effect: "2" },
        { id: "4", effect: "3" },
        { id: "5", effect: "4" },
        { id: "6", effect: "5" },
        { id: "7", effect: "6" },
        { id: "8", effect: "7" },
        { id: "9", effect: "8" },
        { id: "10", effect: "9" },
        { id: "11", effect: "9" },
        { id: "12", effect: "9" },
        { id: "13", effect: "10" },
        { id: "14", effect: "10" },
        { id: "15", effect: "10" },
      ],
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
        let percentage = (
          (numItems.length * 100) /
          this.getTotalAmount
        ).toFixed(2);
        chartData.push({
          modifier: modifier,
          percent: percentage,
          type: this.determineType(modifier),
        });
      });
      return chartData;
    },
  },
  created() {
    // this.determinePercentages();
  },
  watch: {},
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
    determinePerkText(effect) {
      let text = "";
      switch (effect) {
        case "1":
          text = "Remove two -1 cards";
          break;
        case "2":
          text = "Replace one +0 card with one +2 MUDDLE card";
          break;
        case "3":
          text = "Replace one +0 card with one +1 POISON card";
          break;
        case "4":
          text = "Replace one +0 card with one +1 WOUND card";
          break;
        case "5":
          text = "Replace one +0 card with one +1 IMMOBILIZE card";
          break;
        case "6":
          text = "Replace one +0 card with one +1 PUSH (2) card";
          break;
        case "7":
          text = "Replace one +0 card with one +0 STUN card";
          break;
        case "8":
          text = "Replace one +1 card with one +1 STUN card";
          break;
        case "9":
          text = "Add one +2 (wind) card";
          break;
        case "10":
          text = "Replace one +1 card one +3 card";
          break;
        default:
          break;
      }
      return text;
    },
    test() {
      this.deck.push(1);
    },
  },
};
</script>

<style lang="scss">
.helper {
  display: grid;
  grid-template-areas: "perks chart";
}
.perks {
  grid-area: perks;
  &__list {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    text-align: left;
  }
  &__listItem {
    list-style: none;
  }
}
.chart {
  display: grid;
  grid-template-areas:
    "y chart"
    ".  x";
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
    grid-area: chart;
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
