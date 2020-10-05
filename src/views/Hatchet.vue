<template>
  <article class="dashboard">
    <section class="dashboard__a">
      <Snapshots v-bind:deck="deck" v-bind:deckLength="getTotalAmount">
      </Snapshots>
    </section>

    <section class="dashboard__b">
      <Perks
        v-bind:deck="deck"
        @add-to-deck="addToDeck"
        @remove-from-deck="removeFromDeck"
      ></Perks>
    </section>

    <section class="dashboard__c">
      <Chart
        v-bind:deck="deck"
        v-bind:uniqueModifiers="getUniqueModifiers"
        v-bind:deckLength="getTotalAmount"
      ></Chart>
    </section>
  </article>
</template>

<script>
import Snapshots from "@/components/Snapshots.vue";
import Perks from "@/components/Perks.vue";
import Chart from "@/components/Chart.vue";

export default {
  name: "Hatchet",
  components: {
    Snapshots,
    Perks,
    Chart,
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
        "+0",
        "+0",
        "+0",
        "+0",
        "+0",
        "+0",
        "+1",
        "+1",
        "+1",
        "+1",
        "+2",
        "x2",
      ],
      specialEffects: [],
    };
  },
  computed: {
    getTotalAmount() {
      return this.deck.length + 1;
    },
    getUniqueModifiers() {
      return [...new Set(this.deck)];
    },
  },
  created() {
    // this.determinePercentages();
  },
  watch: {},
  methods: {
    addToDeck(modifier) {
      this.deck.push(modifier);
    },
    removeFromDeck(index) {
      this.deck.splice(index, 1);
    },

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

<style lang="scss">
@import "../scss/_shared.scss";

.dashboard {
  display: grid;
  grid-template-areas:
    "b a"
    "b c";
  &__a {
    grid-area: a;
  }
  &__b {
    grid-area: b;
  }
  &__c {
    grid-area: c;
  }
}
.snapshots {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.snapshot {
  flex: 0 0 25%;
  max-width: 25%;
  padding: 24px;
  margin-bottom: 30px;
  background-color: $alt;
  &__figure {
    @include text(24px);
  }
  &__description {
  }
}

.perks {
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
