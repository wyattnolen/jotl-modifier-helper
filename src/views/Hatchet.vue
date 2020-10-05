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
</style>
