<template>
  <v-container>
    <v-card
      class="mx-auto my-12"
      :class="getClassCardByRarity(card.rarity)"
      rounded="xl"
    >
      <!-- NFT Image -->
      <img :src="card.image" class="card-image" />
      <!-- End NFT Image -->

      <!-- NFT Text infos -->
      <v-card-text class="card-text-container">
        <v-row class="pa-2">
          <v-col cols="12" sm="6" :class="getClassByRarity(card.rarity)">
            {{ card.rarity }}
          </v-col>
          <v-col cols="12" sm="6" class="card-id">{{ card.id }}</v-col>
        </v-row>

        <div class="my-4 card-title">{{ card.title }}</div>
        <div class="my-4 card-subtitle">{{ card.subtitle }}</div>
      </v-card-text>
      <!-- EndNFT Text infos -->
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "nft-card",

  props: ["card"],

  methods: {
    getClassCardByRarity(rarity) {
      switch (rarity) {
        case "Légendaire":
          return "legendary-card";
        case "Épique":
          return "epic-card";
        case "Rare":
          return "rare-card";
        case "Commune":
          return "commune-card";
        default:
          return "commune-card";
      }
    },
    getClassByRarity(rarity) {
      switch (rarity) {
        case "Légendaire":
          return "legendary";
        case "Épique":
          return "epic";
        case "Rare":
          return "rare";
        case "Commune":
          return "commune";
        default:
          return "commune";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.legendary,
.epic,
.rare,
.commune {
  border-radius: 15px;
  color: white;
  text-align: center;
  font-size: 0.8rem;
}

.legendary,
.epic,
.rare,
.commune,
.card-id {
  padding: 6px;
}

.legendary {
  background-color: #b829fe;
}
.epic {
  background-color: #01ec9e;
}
.rare {
  background-color: blue;
}
.commune {
  background-color: gray;
}

.card-id {
  text-align: end;
}
.legendary-card {
  border: 2px solid #b829fe;
}
.epic-card {
  border: 2px solid #01ec9e;
}
.rare-card {
  border: 2px solid blue;
}
.commune-card {
  border: 2px solid gray;
}

.card-image {
  width: 100%;
  height: 50%;
}

.card-text-container {
  color: white !important;
}

.theme--light.v-sheet {
  background-color: #191b1e;
  background: linear-gradient(45deg, #253c44 15%, #191b1e);
}

.card-title {
  font-size: 1.1rem;
}
.card-subtitle {
  font-size: 0.7rem;
}
</style>
