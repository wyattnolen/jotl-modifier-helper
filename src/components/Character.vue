<template>
  <div class="character">
    <div class="character__portrait"></div>
    <div class="character__info">
      <h1 class="character__name">{{ getCharacterName }}</h1>
      <p class="character__race">{{ getCharacterRace }}</p>
    </div>
    <div @click="mutateSelectedCharacter('3')">Click me</div>
  </div>
</template>

<script>
  export default {
    name: "Character",
    props: {
      selectedCharacter: String
    },
    data: function() {
      return {
        characters: [
          { id: "1", name: "hatchet", race: "inox" },
          { id: "2", name: "red guard", race: "valrath" },
          { id: "3", name: "voidwarden", race: "human" },
          { id: "4", name: "demolitionist", race: "quatryl" }
        ]
      };
    },
    computed: {
      getCharacterName() {
        let name = this.characters.find(
          char => char.id === this.selectedCharacter
        ).name;
        return name;
      },
      getCharacterRace() {
        let race = this.characters.find(
          char => char.id === this.selectedCharacter
        ).race;
        return race;
      }
    },
    methods: {
      mutateSelectedCharacter(id) {
        this.$emit("update-selected", id);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../scss/_shared.scss";

  .character {
    display: flex;

    &__portrait {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-image: var(--cImage);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>
