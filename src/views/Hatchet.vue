<template>
  <article>
    {{ deck }}
    <section class="" v-for="data in getPercentages" :key="data">
      <p>Modifer {{ data.modifier }}</p>
      <p>Percentage {{ data.percent }}</p>
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
      deck: ["0", "1", "1"],
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
</style>
