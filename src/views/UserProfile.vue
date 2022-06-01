<template>
  <v-container class="user-page">
    <!-- Banner -->
    <div class="banner">
      <img :src="banner.image" cover />
    </div>
    <!-- End Banner -->

    <!-- Profile and badges -->
    <v-row class="profile-container">
      <v-col cols="12" sm="6">
        <ProfileInfos :profileInfos="profileInfos" />
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="12" sm="6">
        <Badges :badges="badges" />
      </v-col>
    </v-row>
    <!-- End Profile and badges -->

    <!-- Collection and stats -->
    <v-btn-toggle
      v-model="toggleTab"
      tile
      color="blue accent-3"
      group
      class="button-group"
    >
      <v-btn value="cards" class="switch-button">Cartes</v-btn>
      <v-btn value="stats" class="switch-button">Stats</v-btn>
    </v-btn-toggle>

    <v-row v-if="toggleTab === 'cards'">
      <CardCollection :cards="cards" />
    </v-row>
    <v-row v-else>
      <div>Une jolie div sur les stats</div>
    </v-row>
    <!-- EndCollection and stats -->
  </v-container>
</template>

<script>
// Components
import CardCollection from "@/components/CardCollection";
import ProfileInfos from "@/components/ProfileInfos";
import Badges from "@/components/Badges";

export default {
  name: "user-profile-page",

  components: {
    CardCollection,
    ProfileInfos,
    Badges,
  },

  data: () => ({
    // Loading
    loading: true,

    // Tabs
    toggleTab: "cards",

    // Banner datas
    banner: {
      image: "https://picsum.photos/1920/1080",
    },

    // Profile infos
    profileInfos: {
      image: "https://picsum.photos/500",
      name: "IVANOVIC Dejan",
      membership: "12-03-2012",
      status: "Fan légendaire",
      // Sorry but i don't really know what this is
      points: [
        {
          value: "42",
          color: "green",
          icon: "mdi-arrow-up-circle",
        },
        {
          value: "10",
          color: "red",
          icon: "mdi-account-details",
        },
        {
          value: "10",
          color: "blue",
          icon: "mdi-apple-safari",
        },
      ],
    },

    // Badges datas
    badges: [
      {
        image: "https://picsum.photos/201",
      },
      {
        image: "https://picsum.photos/202",
      },
      {
        image: "https://picsum.photos/203",
      },
      {
        image: "https://picsum.photos/204",
      },
      {
        image: "https://picsum.photos/205",
      },
      {
        image: "https://picsum.photos/206",
      },
      {
        image: "https://picsum.photos/207",
      },
      {
        image: "https://picsum.photos/208",
      },
      {
        image: "https://picsum.photos/209",
      },
      {
        image: "https://picsum.photos/210",
      },
      {
        image: "https://picsum.photos/211",
      },
      {
        image: "https://picsum.photos/212",
      },
      {
        image: "https://picsum.photos/213",
      },
      {
        image: "https://picsum.photos/214",
      },
      {
        image: "https://picsum.photos/215",
      },
      {
        image: "https://picsum.photos/216",
      },
      {
        image: "https://picsum.photos/217",
      },
    ],

    // Cards datas
    cards: [
      {
        image: "https://picsum.photos/200",
        rarity: "Légendaire",
        id: "Robotic #1",
        title: "Robotic RoboticRobotic",
        subtitle: "Robotic Robotic Robotic Robotic",
      },
      {
        image: "https://picsum.photos/210",
        rarity: "Légendaire",
        id: "Robotic #1",
        title: "Robotic RoboticRobotic",
        subtitle: "Robotic Robotic Robotic Robotic",
      },
      {
        image: "https://picsum.photos/220",
        rarity: "Légendaire",
        id: "Robotic #1",
        title: "Robotic RoboticRobotic",
        subtitle: "Robotic Robotic Robotic Robotic",
      },
      {
        image: "https://picsum.photos/230",
        rarity: "Commune",
        id: "Robotic #1",
        title: "Robotic RoboticRobotic",
        subtitle: "Robotic Robotic Robotic Robotic",
      },
      {
        image: "https://picsum.photos/240",
        rarity: "Épique",
        id: "Robotic #1",
        title: "Robotic RoboticRobotic",
        subtitle: "Robotic Robotic Robotic Robotic",
      },
      {
        image: "https://picsum.photos/250",
        rarity: "Rare",
        id: "Robotic #1",
        title: "Robotic RoboticRobotic",
        subtitle: "Robotic Robotic Robotic Robotic",
      },
      {
        image: "https://picsum.photos/260",
        rarity: "Légendaire",
        id: "Robotic #1",
        title: "Robotic RoboticRobotic",
        subtitle: "Robotic Robotic Robotic Robotic",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.theme--light.v-divider {
  border-color: #282b31;
}

.button-group {
  width: fit-content;
  margin: auto;
  display: block;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.switch-button {
  color: white;
  font-size: 1.5rem;
}

.v-btn-toggle--group > .v-btn.v-btn {
  margin: 0px !important;
}

.banner {
  width: 100%;
  height: 250px;
  border-left: 2px solid #0d99ff;
  border-right: 2px solid #0d99ff;
  border-bottom: 2px solid #0d99ff;

  img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
}

.profile-container {
  margin-top: 1rem;
}

.user-page {
  padding-top: 0;
}
</style>
