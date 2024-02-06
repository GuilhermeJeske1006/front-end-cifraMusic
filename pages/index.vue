<template>
  <base-layout>
    <static-header :item="'Home'" />
    <static-banner />

    <div class="mx-auto max-w-7xl sm:py-6 sm:px-6 lg:px-8">
      <div class="bg-white sm:py-12">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Suas músicas em destaque</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">Abaixo você encontra as suas músicas selecionadas como destaque</p>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-7xl sm:py-12 sm:px-6 lg:px-8">
        <music-list-music :items="items" :setting="setting" />
        <music-modal-delete :open="open" :selectTab="3" :item="item"  @update:open="handleModalStateChanged"/>

    </div>

    </div>
  </base-layout>
</template>

<script setup>
import { useStore } from "@nuxtjs/composition-api";
import { computed, onMounted, ref } from "vue";

const open = ref(false)
const item = ref({})
const openModal = (i) => {
  item.value = i
  open.value = true
  document.body.classList.add('modal-open');

}
const handleModalStateChanged = (newState) => {
  open.value = newState;
};

const store = useStore()

onMounted(() => {
  store.dispatch('music/highLightMusic', { page: 1 });
})

const items = computed(() => {
  return store.state.music.highlight
})

const setting = ref([
  {
    name: 'Ver',
    action: '/music/detail/',
    link: true
  },
  {
    name: 'Editar',
    action: ''
  },
  {
    name: 'Excluir',
    action: openModal
  },
])


</script>
