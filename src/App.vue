<script setup>
import SearchBar from "./components/SearchBar.vue";
import TheHeader from "./components/TheHeader.vue";
import UserBox from "./components/UserBox.vue";
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <TheHeader />
    <main>
      <SearchBar />
      <UserBox />
    </main>
  </div>
</template>
