<template>
  <div class="perks">
    <ul class="perks__list">
      <li class="perks__listItem" v-for="perk in perks" :key="perk.id">
        <label :for="perk.id">
          <input
            :id="perk.id"
            type="checkbox"
            @click="perkEffect(perk.effect, $event)"
          />
          {{ determinePerkText(perk.effect) }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Perks",
  props: {
    deck: Array,
  },
  data: function() {
    return {
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
    };
  },
  computed: {},
  methods: {
    mutateModifier(modifier, toggle) {
      toggle = toggle ? "add" : "remove";
      if (toggle === "add") {
        this.$emit("add-to-deck", modifier);
        // this.deck.push(modifier);
      } else {
        let index = this.deck.indexOf(modifier);
        if (index > -1) {
          this.$emit("remove-from-deck", index);
          // this.deck.splice(index, 1);
        }
      }
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
    perkEffect(effect, event) {
      let toggle = event.target.checked;
      //For the purposes of toggle, true means to add, and false means to remove

      //Add/Remove two -1 cards
      if (effect == "1") {
        this.mutateModifier("-1", !toggle);
        this.mutateModifier("-1", !toggle);
      }
      //Replace one +0 card with one +2 MUDDLE card
      if (effect == "2") {
        this.mutateModifier("+0", !toggle);
        this.mutateModifier("+2", toggle);
      }
      //Replace one +0 card with one +1 POISON card
      if (effect == "3") {
        this.mutateModifier("+0", !toggle);
        this.mutateModifier("+1", toggle);
      }
      //Replace one +0 card with one +1 WOUND card
      if (effect == "4") {
        this.mutateModifier("+0", !toggle);
        this.mutateModifier("+1", toggle);
      }
      //Replace one +0 card with one +1 IMMOBILIZE card
      if (effect == "5") {
        this.mutateModifier("+0", !toggle);
        this.mutateModifier("+1", toggle);
      }
      //Replace one +0 card with one +1 PUSH (2) card
      if (effect == "6") {
        this.mutateModifier("+0", !toggle);
        this.mutateModifier("+1", toggle);
      }
      //Replace one +0 card with one +0 STUN card
      if (effect == "7") {
        this.mutateModifier("+0", !toggle);
        this.mutateModifier("+0", toggle);
      }
      //Replace one +1 card with one +1 STUN card
      if (effect == "8") {
        this.mutateModifier("+1", !toggle);
        this.mutateModifier("+1", toggle);
      }
      //Add one +2 (wind) card
      if (effect == "9") {
        this.mutateModifier("+2", toggle);
      }
      //Replace one +1 card one +3 card
      if (effect == "10") {
        this.mutateModifier("+1", !toggle);
        this.mutateModifier("+3", toggle);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
