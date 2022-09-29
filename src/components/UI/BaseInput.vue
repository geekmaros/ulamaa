<script setup lang="ts">
import { defineEmits } from "vue";

interface Props {
  modelValue: string;
  type: string;
  placeholder: string;
  label?: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <div class="relative w-4/12 h-14 pl-4 flex justify-start items-center">
    <div class="z-30 pr-4">
      <slot name="icon"></slot>
    </div>
    <label v-if="props.label">{{ props.label }}</label>
    <input
      class="rounded-full absolute inset-0 placeholder-gray-200 pl-14 text-gray-800  text-base font-normal focus:outline-none focus:ring-teal-600 focus:border-teal-600"
      :type="props.type"
      :placeholder="props.placeholder"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped></style>
