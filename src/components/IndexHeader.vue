<script setup lang="ts">
import {ref} from "vue";
import BaseInput from "@/components/UI/BaseInput.vue";
import SearchIcon from "@/components/Icons/SearchIcon.vue";
import Toggle from "@/components/UI/Toggle.vue";

const search = ref("");

const toggleState = ref(false)



</script>
<template>
  <header class="h-32 px-36">
    {{toggleState}}
    <a href="/" class="logo"><img src="../assets/logo.svg" alt="" /></a>
    <BaseInput v-model="search" placeholder="Name, Country, City" type="search">
      <template #icon>
        <SearchIcon />
      </template>
    </BaseInput>
    <nav class="flex items-center">
      <router-link class="link" to="/about">About Us</router-link>
      <router-link class="link" to="/help">Help</router-link>
      <div class="theme-wrapper">
        <Toggle v-model="toggleState" />
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  background: url("../assets/svg/indexheader.svg");

  nav {
    .link {
      @apply text-base text-gray-10 font-medium mr-20 hover:text-teal-800 transition-all ease-in-out;
    }
  }
}
</style>
