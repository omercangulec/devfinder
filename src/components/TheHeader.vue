<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="px-6 py-8 md:pt-32">
    <nav class="flex items-center justify-between dark:text-light-mode-white-2">
      <h1 class="text-3xl">devfinder</h1>
      <button
        @click="toggleDark()"
        class="flex items-center gap-3 transition-all hover:text-secondary-blue"
      >
        <span class="tracking-widest">{{ isDark ? "LIGHT" : "DARK" }}</span>
        <v-icon name="bi-sun-fill" v-if="isDark" />
        <v-icon name="bi-moon-fill" v-else />
      </button>
    </nav>
  </header>
</template>
