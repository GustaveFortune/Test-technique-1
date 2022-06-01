<template>
  <v-container>
    <v-row class="center-row">
      <v-col cols="12" sm="6" class="collection-title">Collection</v-col>

      <!-- NFT Cards Filters -->
      <v-col cols="12" sm="3">
        <!-- No idea what this filter is for ... so it will not filter at all -->
        <v-select
          :items="categories"
          label="Catégorie"
          outlined
          v-model="categoryFilter"
          dark
          :append-outer-icon="categoryFilter == '' ? '' : 'mdi-close'"
          @click:append-outer="resetFilter('categoryFilter')"
          color="#007dfe"
          hide-details
        >
        </v-select>
      </v-col>
      <v-col cols="12" sm="3">
        <v-select
          :items="rarity"
          label="Rareté"
          outlined
          v-model="rarityFilter"
          dark
          :append-outer-icon="rarityFilter == '' ? '' : 'mdi-close'"
          @click:append-outer="resetFilter('rarityFilter')"
          color="#007dfe"
          hide-details
        >
        </v-select>
      </v-col>
      <!-- End NFT Cards Filters -->
    </v-row>

    <!-- NFT Cards List -->
    <v-row class="nft-container">
      <div
        v-for="(card, index) in getFilteredCards()"
        :key="card + index"
        class="item"
      >
        <NFTCard :card="card" />
      </div>
    </v-row>
    <!-- End NFT Cards List -->
  </v-container>
</template>

<script>
// Components
import NFTCard from "@/components/NFTCard";

export default {
  name: "card-collection",

  components: {
    NFTCard,
  },

  props: ["cards"],

  data: () => ({
    // Filters
    categories: ["A", "B", "C", "D"],
    rarity: ["Légendaire", "Épique", "Rare", "Commune"],
    categoryFilter: "",
    rarityFilter: "",
  }),

  methods: {
    getFilteredCards() {
      return this.rarityFilter === ""
        ? this.cards
        : this.cards.filter((card) => {
            return card.rarity === this.rarityFilter;
          });
    },

    resetFilter(item) {
      this[item] = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.nft-container {
  display: flex;
  flex-flow: row wrap;
  margin-top: 0 !important;
}

.item {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(20% - 10px); /* separate properties for IE11 upport */
  margin: 5px;
}

.center-row {
  align-items: center;
}

.collection-title {
  font-size: 2rem;
  padding-left: 3rem;
}
</style>
