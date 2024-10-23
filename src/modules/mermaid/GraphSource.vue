<script setup lang="ts">
import { graphDataRaw } from './model/cache'
</script>

<template>
  <textarea
    v-model="graphDataRaw"
    spellcheck="false"
    outline-none font-mono
  />
</template>
