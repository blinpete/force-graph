<script setup lang="ts">
defineSlots<{
  default: any
}>()
</script>

<template>
  <button
    p-1.5 rounded-md hover:bg-coolgray hover:bg-op-20
    class="disabled:text-blueGray"
    flex items-center
  >
    <slot />
  </button>
</template>
