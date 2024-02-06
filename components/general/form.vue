<template>
        <form @submit.prevent="submit">
          <slot></slot>
  
          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Salvar</button>
          </div>
        </form>

  </template>
    
  <script setup>
import { useStore } from '@nuxtjs/composition-api';
import { onMounted } from 'vue';

  const props = defineProps({
    action: {
      type: Array,
      default: () => []
    },
    submit: {
      type: Function,
      default: () => {}
    }
  })

  const store = useStore()

  onMounted(() => {
    for(let i = 0; i < props.action.length; i++){
      store.dispatch(props.action[i], { page: 1 })
    }
  })
  
  </script>
    