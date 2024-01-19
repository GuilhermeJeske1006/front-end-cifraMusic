<template>
  <div>
    <button type="button" @click="fn" class=" inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm  sm:w-auto" :class="customClass" v-model="model">{{ label }}</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  fn: {
    type: Function,
    default: () => {}
  },
  customClass: {
    type: String,
    default: ''
  },
  model: {
    type: String,
    default: ''
  }
});
</script>
