<template>
  <base-layout>
    <static-header :item="item.title" />

    <div class="mx-auto max-w-7xl sm:py-6 sm:px-6 lg:px-8">
      <div class="bg-white ">
        <div class="mx-auto max-w-7xl  sm:px-6 lg:px-8">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ item.title }}</p>
          <p class="mt-3 text-lg leading-8 text-gray-600">{{item.singer?.name_singer}}</p>
          <p class="mt-3 text-lg leading-8 text-gray-600">Nota: {{item.note?.name_note}} - BPM: {{item.bpm}}</p>

        </div>

      </div>
      <div class=" max-w-7xl sm:py-12 sm:px-6 lg:px-8">
        <p class="mt-6 text-lg leading-8 text-gray-600">
          <div v-html="item.lyrics"></div>
        </p>
      </div>

    </div>
  </base-layout>
</template>

<script setup>
import { useRoute, useStore } from '@nuxtjs/composition-api';
import { computed, onMounted } from 'vue';

const store = useStore()

const route = useRoute()

const item = computed(() => {
  return store.state.music.detail
})


onMounted(() => {
  store.dispatch('music/showMusic', route.value.params.id)
})


</script>

