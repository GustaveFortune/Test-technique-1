<template>
  <v-app>
    <v-main class="app">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.app {
  background-color: #191a20;
  width: 100%;
  height: 100%;
  color: white;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px !important;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px !important;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px !important;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1200px !important;
  }
}

@media (min-width: 1432px) {
  .container {
    max-width: 1432px !important;
  }
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
