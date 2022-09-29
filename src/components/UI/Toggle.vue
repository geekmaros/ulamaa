<script setup lang="ts">
import DarkModeIcon from "@/components/Icons/DarkModeIcon.vue";
import LightModeIcon from "@/components/Icons/LightModeIcon.vue";
import { useDarkMode } from "@/composables/useDarkMode";
import { computed, ref } from "vue";

const { initTheme, toggleUserTheme, userTheme } = useDarkMode();

initTheme();

const renderThemeIcon = computed(() => {
  if (userTheme.value === "light") {
    return DarkModeIcon;
  } else {
    return LightModeIcon;
  }
});
</script>
<template>
  <div
    @click="toggleUserTheme"
    class="toggle h-10 w-20 bg-teal-900 cursor-pointer transform transition-all rounded-full flex justify-between p-1 items-center"
  >
    <div
      :class="{ 'translate-x-[2.6rem] ': userTheme === 'dark' }"
      class="icon text-gray-600 transform rounded-full transition-all duration-500 w-7 h-7 bg-gray-10 grid place-items-center"
    >
      <component :is="renderThemeIcon"></component>
    </div>

  </div>
</template>

<style scoped></style>
