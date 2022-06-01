<template>
  <v-container class="point-container">
    <div class="point-value-container">
      <div :class="point.color + ' icon-container pa-1'">
        <v-icon>{{ point.icon }}</v-icon>
      </div>
      <div class="point-value">
        {{ point.value }}
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "points-component",

  props: ["point"],
};
</script>

<style lang="scss" scoped>
.icon-container {
  width: fit-content;
  border-radius: 8px;
}

.point-value-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.point-container {
  border: 2px solid #373a42;
  border-radius: 8px;
  background-color: #13161c;
}

.point-value {
  flex-grow: 1;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
