<template>
  <base-layout>
    <static-header :item="'Home'" />
    <static-banner />

    <div class="mx-auto max-w-7xl sm:py-6 sm:px-6 lg:px-8">
      <div class="bg-white sm:py-12">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Suas músicas em destaque</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-7xl sm:py-12 sm:px-6 lg:px-8">
      <general-list :item="data" />
      <general-paginate />
    </div>

    </div>
  </base-layout>
</template>

<script>
import { ref, onMounted, useStore } from '@nuxtjs/composition-api';

export default {
  setup() {
    const data = ref(null);
    const store = useStore(); // Use useStore to access the Vuex store

    onMounted(async () => {
      await store.dispatch('music/listingHighlight'); // Use the store from useStore
      data.value = store.state.data;
    });

    return {
      data,
    };
  },
};
</script>
