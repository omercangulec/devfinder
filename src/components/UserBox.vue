<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import TheLoader from "./TheLoader.vue";
const store = useStore();

const user = computed(() => {
  return store.getters.user;
});

const error = computed(() => {
  return store.getters.error;
});

const query = computed(() => {
  return store.getters.query;
});

const isLoading = computed(() => {
  return store.getters.isLoading;
});

const createdAt = computed(() => {
  let datex;
  let arr = user.value.created_at.slice(0, 10).split("-");
  let date = new Date(arr[0], arr[1], arr[2]);
  let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  let month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  datex = `${day} ${month} ${year}`;
  return datex;
});
</script>

<template>
  <TheLoader v-if="isLoading" />
  <p
    v-if="!query"
    class="mt-5 text-2xl text-center dark:text-light-mode-white-2"
  >
    Search and find the user.
  </p>
  <div
    v-else-if="!isLoading && query"
    class="px-8 py-6 mx-6 my-4 bg-light-mode-white-2 dark:bg-primary-blue rounded-xl"
  >
    <p v-if="error" class="dark:text-light-mode-white-2">{{ error }}</p>
    <div v-else>
      <div class="flex items-start gap-5 mb-7">
        <img :src="user.avatar_url" alt="img" class="rounded-full size-24" />

        <div class="items-start justify-between w-full md:flex">
          <div class="mb-2">
            <h2 class="text-xl dark:text-light-mode-white-2">
              {{ user.name }}
            </h2>
            <span class="text-secondary-blue">@{{ user.login }}</span>
          </div>
          <p
            class="flex flex-col text-light-mode-grey dark:text-dark-mode-white sm:block"
          >
            <span>Joined</span> <span>{{ createdAt }}</span>
          </p>
        </div>
      </div>

      <div class="dark:text-light-mode-white-2">
        <p class="mb-6">Bio: "{{ user.bio ?? "User has no bio." }}"</p>

        <div
          class="flex items-center justify-around px-2 py-4 mb-6 sm:px-8 bg-light-mode-light-grey dark:bg-bg-dark-mode rounded-xl"
        >
          <div class="flex flex-col items-center gap-2">
            <span class="text-light-mode-grey">Repos</span>
            <span>{{ user.public_repos }}</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-light-mode-grey">Followers</span>
            <span>{{ user.followers }}</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-light-mode-grey">Following</span>
            <span>{{ user.following }}</span>
          </div>
        </div>

        <div
          class="flex flex-col items-start gap-3 md:flex-row md:justify-evenly md:align-center"
        >
          <div class="flex items-center gap-3">
            <v-icon name="md-locationon" />
            <span>{{ user.location ?? "No location" }}</span>
          </div>
          <div class="flex items-center gap-3">
            <v-icon name="hi-solid-link" />
            <span
              ><a :href="user.html_url">{{ user.html_url }}</a></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
