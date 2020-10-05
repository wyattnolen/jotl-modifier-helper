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
    "b"
    "a"
    "c";
  grid-template-columns: 100%;
  gap: 30px 30px;
  max-width: 90vw;
  margin: 0 auto;
  @media (min-width: $sm) {
    grid-template-areas:
      "b a"
      "b c";
    grid-template-columns: 30% 70%;
    grid-template-rows: 25% 75%;
    max-width: 90vw;
  }
  &__a {
    grid-area: a;
  }
  &__b {
    grid-area: b;
    padding: 24px;
    background-color: $alt;
  }
  &__c {
    grid-area: c;
    padding: 24px;
    background-color: $alt;
  }
}
</style>
