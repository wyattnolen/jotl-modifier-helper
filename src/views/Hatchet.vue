<template>
  <article></article>
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
  },
  created() {
    this.determinePercentages();
  },
  watch: {},
  methods: {
    determinePercentages() {
      let values = this.getUniqueValues;
      let total = this.getTotalAmount;
      values.forEach((modifier) => {
        const numItems = this.deck.filter((card) => card === modifier);
        console.log(
          `modifier ${modifier} represents ${(numItems.length * 100) / total}%`,
        );
      });
    },
  },
};
</script>

<style lang="scss">
span {
  font-weight: bold;
}
</style>
