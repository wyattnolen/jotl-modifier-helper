<template>
  <article class="dashboard" v-bind:class="'dashboard--' + selectedCharacter">
    <div class="dashboard__inner">
      <section class="dashboard__a">
        <Snapshots v-bind:deck="deck" v-bind:deckLength="getTotalAmount">
        </Snapshots>
      </section>

      <section class="dashboard__b">
        <Character
          v-bind:selectedCharacter="selectedCharacter"
          @update-selected="updateSelectedCharacter"
        ></Character>
        <Perks
          v-bind:deck="deck"
          v-bind:selectedCharacter="selectedCharacter"
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
    </div>
  </article>
</template>

<script>
  import Snapshots from "@/components/Snapshots.vue";
  import Character from "@/components/Character.vue";
  import Perks from "@/components/Perks.vue";
  import Chart from "@/components/Chart.vue";

  export default {
    name: "Hatchet",
    components: {
      Snapshots,
      Character,
      Perks,
      Chart
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
          "x2"
        ],
        specialEffects: [],
        selectedCharacter: "1",
        characterDecks: []
      };
    },
    computed: {
      getTotalAmount() {
        return this.deck.length + 1;
      },
      getUniqueModifiers() {
        return [...new Set(this.deck)];
      }
    },
    created() {},
    watch: {
      selectedCharacter: function() {
        this.resetDeck();
      }
    },
    methods: {
      addToDeck(modifier) {
        this.deck.push(modifier);
      },
      removeFromDeck(index) {
        this.deck.splice(index, 1);
      },
      resetDeck() {},
      updateSelectedCharacter(character) {
        this.selectedCharacter = character;
      }
    }
  };
</script>

<style lang="scss">
  @import "../scss/_shared.scss";

  .dashboard {
    /* Default Color */
    --pri: #e9eaef;
    --alt: #ffffff;
    --textColor: #333;
    --titleColor: #000;

    max-width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 30px 5vw;
    margin: 0 auto;
    background-color: var(--pri);
    /* Hatchet */
    &--1 {
      --pri: #aba194;
      --alt: #ddd1c7;
      --cImage: url("../assets/1.jpg");
    }
    /* Red Guard */
    &--2 {
      --pri: #aba194;
      --alt: #ddd1c7;
      --cImage: url("../assets/2.jpg");
    }
    /* Voidwarden */
    &--3 {
      --pri: #1a1c2a;
      --alt: #222437;
      --textColor: #a5a6ad;
      --titleColor: #fff;
      --cImage: url("../assets/3.jpg");
    }
    /* Demolitionist */
    &--4 {
      --pri: #1a1c2a;
      --alt: #222437;
      --textColor: #a5a6ad;
      --titleColor: #fff;
      --cImage: url("../assets/4.jpg");
    }

    &__inner {
      display: grid;
      grid-template-areas:
        "b"
        "a"
        "c";
      grid-template-columns: 100%;
      gap: 30px 30px;

      @media (min-width: $sm) {
        grid-template-areas:
          "b a"
          "b c";
        grid-template-columns: 30% 70%;
        grid-template-rows: 0fr 1fr;
      }
    }

    &__a {
      grid-area: a;
    }
    &__b {
      grid-area: b;
      @include card;
    }
    &__c {
      grid-area: c;
      @include card;
    }
  }
</style>
