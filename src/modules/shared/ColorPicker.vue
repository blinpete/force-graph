<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <input
    v-model="model"
    type="color"
    class="picker__input border-[currentColor]"
    h4 w4 border-2
    cursor-pointer pos-relative
    rounded-md
    :style="{ backgroundColor: model }"
  >
</template>

<style scoped>
.picker__input::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: inherit;
}
.picker__input:disabled {
  opacity: 0.5;
}
.picker__input:hover {
  transform: scale(1.2);
}
</style>
