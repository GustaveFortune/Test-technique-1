<template>
  <v-container>
    <v-row>
      <!-- Profile pic -->
      <v-col cols="12" sm="3">
        <v-img :src="profileInfos.image" class="profile-pic" contain></v-img>
      </v-col>
      <!-- End Profile pic -->

      <!-- Profile infos text -->
      <v-col cols="12" sm="9">
        <v-row>
          <v-col cols="12" sm="8">
            <v-row class="user-name">
              {{ profileInfos.name }}
            </v-row>
            <v-row class="user-status">
              {{ profileInfos.status }}
            </v-row>
          </v-col>
          <v-col cols="12" sm="4" class="user-membership-container">
            <v-row class="user-membership">
              Membre depuis : {{ profileInfos.membership }}
            </v-row>
          </v-col>
        </v-row>
        <!-- End Profile infos text -->

        <!-- Profile points to share -->
        <v-row class="points-container">
          <v-col
            cols="12"
            sm="3"
            v-for="(point, index) in profileInfos.points"
            :key="point + index"
          >
            <Points :point="point" />
          </v-col>
          <v-col
            cols="12"
            sm="1"
            offset-md="1"
            class="share-icon share-button"
            v-on:click="shareOnSocialMedia()"
          >
            <v-icon> mdi-share </v-icon>
          </v-col>
        </v-row>
        <!-- End Profile points to share -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Components
import Points from "./Points";

export default {
  name: "profile-infos-component",

  props: ["profileInfos"],

  components: {
    Points,
  },

  methods: {
    shareOnSocialMedia() {
      alert("Share completed !");
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-pic,
.share-icon {
  min-width: 50px;
}

.profile-pic {
  border-radius: 30px;
}

.user-membership-container {
  font-size: 0.7rem;
  line-height: 1.7rem;
}

.user-name {
  font-size: 1.7rem;
  font-weight: bold;
}

.user-name,
.user-status,
.user-membership {
  margin: 0 !important;
}

.user-status {
  color: #707172;
  font-size: 0.9rem;
}

.theme--light.v-icon {
  color: unset !important;
}

.share-icon {
  background-color: #007ffe50;
  color: #007ffe !important;
  width: fit-content;
  text-align: center;
  border-radius: 15px;
}

.points-container {
  align-items: center;
}

.share-button {
  cursor: pointer;
}
</style>
