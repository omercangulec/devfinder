<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const username = ref("");

function setUsername() {
  return store.dispatch("setQuery", { query: username.value });
}

function getUser() {
  return store.dispatch("getUser", { username });
}

function handleClick() {
  setUsername();
  getUser();
  username.value = "";
}
</script>

<template>
  <div class="relative flex items-center justify-center px-6 py-4">
    <button @click="handleClick">
      <v-icon
        name="bi-search"
        class="absolute cursor-pointer size-6 left-10 top-[34px] text-secondary-blue"
      />
    </button>
    <input
      @keyup.enter="handleClick"
      v-model="username"
      type="text"
      placeholder="Search GitHub username"
      class="w-full px-12 py-5 text-sm focus:outline-none rounded-xl dark:bg-primary-blue dark:text-light-mode-white-2 focus:ring"
    />
    <button
      @click="handleClick"
      class="absolute p-3 transition-all bg-secondary-blue rounded-xl text-light-mode-white-2 right-8 hover:opacity-80"
    >
      Search
    </button>
  </div>
</template>
