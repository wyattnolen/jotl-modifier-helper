<template>
  <div class="snapshots">
    <div class="snapshot">
      <p class="snapshot__figure">
        {{ determineOverallPercents("positive") }}%
      </p>
      <p class="snapshot__description">Chance of a positive of modifier</p>
    </div>
    <div class="snapshot">
      <p class="snapshot__figure">
        {{ determineOverallPercents("negative") }}%
      </p>
      <p class="snapshot__description">Chance of a negative of modifier</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Snapshots",
  props: {
    deck: Array,
    deckLength: Number,
  },
  data: function() {
    return {};
  },
  computed: {},
  methods: {
    determineOverallPercents(request) {
      let percentTotal = 0;
      let countOfRequest = 0;
      let deckSize = this.deckLength;
      let type = "";
      this.deck.forEach((modifier) => {
        type = this.determineType(modifier);
        if (type === request) {
          countOfRequest += 1;
        }
      });

      percentTotal = (countOfRequest * 100) / deckSize;
      return percentTotal.toFixed(2);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/_shared.scss";

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
</style>
