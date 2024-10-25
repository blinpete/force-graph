<script setup lang="ts">
import logo from '../assets/logo.svg?raw'
</script>

<template>
  <main flex="~ col" items-center justify-center gap-10 text-main class="font--fancy">
    <div
      bg-active p3 rounded-full h-64px w-64px border-2 border-main
      hover:rotate-20 hover:translate-x-5 duration-500
      flex justify-center items-center
      v-html="logo"
    />

    <div flex="~ row" gap-2 items-center class="-mt-2">
      <h1 font-900 text-14 class="line-height-none">
        Force graph
      </h1>
    </div>

    <div flex="~ col" font-400 gap-0.5 style="letter-spacing: 0.4px;">
      <p>Choose you must, a path to take.</p>
      <p>Watch gravity turning your thoughts awake.</p>
      <p>With Mermaid words or Excalidraw swords.</p>
      <p>Graphs those directs a force...</p>
      <p text-end text-subtle text-sm>
        <a href="https://poe.com/" target="_blank" rel="noopener noreferrer">>_ Poe AI</a>
      </p>
    </div>

    <div flex="~ row" justify-center gap-4>
      <RouterLink to="/me" class="link">
        Mermaid
      </RouterLink>
      <RouterLink to="/ex" class="link">
        Excalidraw
      </RouterLink>
    </div>

    <div>
      <a
        class="link"
        pos-fixed bottom-3 right-5
        href="https://github.com/blinpete/force-graph"
        target="_blank" rel="noopener noreferrer"
        style="text-decoration: none;"
      >@blinpete</a>
    </div>
  </main>
</template>
