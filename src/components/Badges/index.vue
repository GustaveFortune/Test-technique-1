<template>
  <v-container class="badges-container">
    <span class="badges-title">Badges</span>

    <!-- Badges Hexa List -->
    <div class="main">
      <div class="hexa-container">
        <span v-if="showLess">
          <div v-for="(badge, index) in badges" :key="badge + index">
            <template v-if="index < 14">
              <v-img :src="badge.image" />
            </template>
          </div>
        </span>
        <span v-else>
          <div v-for="badge in badges" :key="badge + index">
            <v-img :src="badge.image" />
          </div>
        </span>
      </div>
    </div>
    <!-- End Badges Hexa List -->
  </v-container>
</template>

<script>
export default {
  name: "badges-component",

  props: ["badges"],

  data: () => ({
    showLess: false,
  }),

  methods: {
    getImgUrl(badge) {
      if (badge.image) {
        return badge.image;
      }
      return "";
    },
  },

  created() {
    this.showLess = this.badges.length > 14 ? true : false;
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  --s: 60px; /* size  */
  --m: 4px; /* margin */
  --f: calc(1.732 * var(--s) + 4 * var(--m) - 1px);
  width: 90%;
  margin: auto;
}

.hexa-container {
  font-size: 0; /*disable white space between inline block element */
}

.hexa-container div {
  width: var(--s);
  margin: var(--m);
  height: calc(var(--s) * 1.1547);
  display: inline-block;
  font-size: initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  margin-bottom: calc(var(--m) - var(--s) * 0.2885);
}
.hexa-container::before {
  content: "";
  width: calc(var(--s) / 2 + var(--m));
  float: left;
  height: 120%;
  shape-outside: repeating-linear-gradient(
    #0000 0 calc(var(--f) - 3px),
    #000 0 var(--f)
  );
}

.badges-container {
  width: 90%;
  margin: auto;
}

.badges-title {
  font-size: 2rem;
}
</style>
