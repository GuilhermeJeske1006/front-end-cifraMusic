<template>
  <base-layout>
    <static-header :item="'Minhas Músicas'" />

    <div class="mx-auto max-w-7xl mb-20 sm:py-3 sm:px-6 lg:px-8">
      <div class="bg-white sm:py-12">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Listagem de todas as músicas</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">Encontre a sua música abaixo, você pode fazer a pesquisa pelo
              nome da música ou filtrar através do artista ou ritmo da mesma.</p>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="hidden shrink-0 mb-7  sm:flex sm:flex-col sm:items-start">

          <NuxtLink to="/music/register" type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
            <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 1v16M1 9h16" />
            </svg>
            Cadastrar nova música
          </NuxtLink>


        </div>
        <general-filter :submit="search" class="mb-5">
          <div class="relative w-full ">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input v-model="searchItem" type="text" id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
              :placeholder="'Pesquise pelo nome' +  placeholder + ' ...'">
          </div>
        </general-filter>

        <general-tabs :items="tabs" />

        <div class="relative mx-auto mt-10 w-full max-w-container " v-if="selectTab == 0">
          <music-list-music :items="items.data" :setting="setting" />
        </div>

        <div v-for="item in items.data" v-if="selectTab == 1">

          <div class="relative mx-auto mt-10 w-full max-w-container ">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ item.name_singer }}</h2>

          </div>
          <music-list-music :items="item.musics" :setting="setting" />
        </div>

        <div v-for="item in items.data" v-if="selectTab == 2">

          <div class="relative mx-auto mt-10 w-full max-w-container ">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ item.name_rhythm }}</h2>

          </div>
          <music-list-music :items="item.musics" :setting="setting" />
        </div>


        <general-paginate :current-page="items.meta.current_page" :total-pages="items.meta.last_page"
          :total-items-per-page="items.meta.per_page" :total-items="items.meta.total" @page-change="handlePageChange" />
      </div>

      <music-modal-delete :open="open" :selectTab="selectTab" :item="item" @update:open="handleModalStateChanged" />
    </div>
  </base-layout>
</template>

<script setup>
import { computed, defineEmits, onMounted, ref, watchEffect } from "vue";
import { useStore } from "@nuxtjs/composition-api";

const open = ref(false)
const item = ref({})

const searchItem = ref('')

const openModal = (i) => {
  item.value = i
  open.value = true
  document.body.classList.add('modal-open');

}
const handleModalStateChanged = (newState) => {
  open.value = newState;
};


const placeholder = computed(() => {
  if (selectTab.value === 0) {
    return ' da música'
  }
  if (selectTab.value === 1) {
    return ' do artista'
  }
  if (selectTab.value === 2) {
    return ' do ritmo'
  }
  return '';
});


const search = () => {
  if(selectTab.value === 0){
    store.dispatch('music/listMusic', { page: 1, search: searchItem.value });
  }
  if(selectTab.value === 1){
    store.dispatch('singer/getSingers', { page: 1, search: searchItem.value });
  }
  if(selectTab.value === 2){
    store.dispatch('rhythm/getRhythms', { page: 1, search: searchItem.value });
  }
}

const store = useStore()

const selectTab = ref(0)

const handlePageChange = (page) => {
  if (selectTab.value === 0){
    store.dispatch('music/listMusic', { page });
  }
  if (selectTab.value === 1){
    store.dispatch('singer/getSingers', { page });
  } 
  if (selectTab.value === 2) {
    store.dispatch('rhythm/getRhythms', { page });
  } 
};

const items = computed(() => {
  if (selectTab.value === 0) {
    return store.state.music.data || {};
  }
  if (selectTab.value === 1) {
    return store.state.singer.data || {};
  }
  if (selectTab.value === 2) {
    return store.state.rhythm.data || {};
  }
  return {};
});

onMounted(() => {
  selectTab.value = 0
  store.dispatch('music/listMusic', { page: 1 });
})

const musics = () => {
  selectTab.value = 0
  store.dispatch('music/listMusic', { page: 1 })
}

const singers = () => {
  selectTab.value = 1
  store.dispatch('singer/getSingers', { page: 1 })
}

const rhythms = () => {
  selectTab.value = 2
  store.dispatch('rhythm/getRhythms', { page: 1 })
}


const tabs = [
  {
    icon: ` <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 1h10M6 5h10M6 9h10M1.49 1h.01m-.01 4h.01m-.01 4h.01"/>
  </svg>`,
    name: 'Todos',

    action: musics

  },
  {
    icon: `<svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 19">
    <path d="M15 5a1 1 0 0 0-1 1v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a1 1 0 0 0-2 0v3a6.006 6.006 0 0 0 6 6h1v2H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9v-2h1a6.006 6.006 0 0 0 6-6V6a1 1 0 0 0-1-1Z"/>
    <path d="M9 0H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"/>
  </svg>`,
    name: 'Por Artista',
    action: singers

  },
  {
    icon: `<svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 11.5V1s3 1 3 4m-7-3H1m9 4H1m4 4H1m13 2.4c0 1.325-1.343 2.4-3 2.4s-3-1.075-3-2.4S9.343 10 11 10s3 1.075 3 2.4Z"/>
  </svg>`,
    name: 'Por Ritmo',
    action: rhythms

  }
]

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
