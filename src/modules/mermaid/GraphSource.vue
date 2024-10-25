<script setup lang="ts">
import { graphDataRaw } from './model/cache'
</script>

<template>
  <div class="root">
    <textarea
      v-model="graphDataRaw"
      pos-relative
      spellcheck="false"
      outline-none font-mono bg-transparent
      h-full w-full p3
      class="textarea"
      placeholder="Create your graph...&#10;&#10;New node&#10;node1: My first node&#10;n2: My node 2&#10;db: Databas&#10;&#10;New edge&#10;node1 --> n2&#10;&#10;Edge types&#10;n2 -> db (solid)&#10;n2 --> db (dash)&#10;&#10;Chaining&#10;node1 --> db <- n2"
    />
    <div pos-absolute right-3 bottom-3>
      <a
        text-xs
        link
        href="https://mermaid.js.org/syntax/stateDiagram.html"
        target="_blank"
        rel="noopener noreferrer"
      >syntax</a>
    </div>
  </div>
</template>

<style lang="css" scoped>
.textarea {
  scrollbar-width: none;
  max-height: calc(100dvh - 2rem);
  height: 100dvh
}
</style>
