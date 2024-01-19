<template>
  <div v-if="localOpen" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="handleClose"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <slot :open="localOpen"></slot>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <general-button :label="label" :customClass="customClass" :fn="fn"/>
            <general-button :label="'Cancelar'" :customClass="'sm:mt-0  mt-3 bg-white text-gray-900  ring-1 ring-inset ring-gray-300 hover:bg-gray-50'" :fn="handleClose"/>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, defineEmits, watch, ref} from 'vue';

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  customClass: {
    type: String,
    default: ''
  },
  fn: {
    type: Function,
    default: () => {}
  },
  label: {
    type: String,
    default: ''
  },
});

const emits = defineEmits(['update:open']);

const localOpen = ref(props.open);

watch(() => props.open, (newValue) => {
  localOpen.value = newValue;
});
const handleClose = () => {
  emits('update:open', false);
  document.body.classList.remove('modal-open');
};



</script>

