<template>

  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="(item, index) in items" :key="item.email" class="flex justify-between gap-x-6 py-5">
      <div class="flex min-w-0 gap-x-4">
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">{{ item.title }}</p>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ item.singer.name_singer }}</p>
        </div>
      </div>
      <div class="hidden shrink-0  sm:flex sm:flex-col sm:items-center">
        <p class="text-sm leading-6 text-gray-900">{{ item.rhythm.name_rhythm}}</p>
        <p  class="mt-1 text-xs leading-5 text-gray-500">
          Criado em <time>{{ item.created_at }}</time>
        </p>

      </div>
      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <!-- <button style="background-color: transparent;" @click="openSetting(item.id)" type="button"
                class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button" :aria-expanded="showSettings[item.id]" aria-haspopup="true">
                    <svg class="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 4 15">
                        <path
                            d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                </button> -->


                <!-- <div v-if="showSettings[item.id]"
                    class="absolute  z-10 mt-2 w-48  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu" aria-orientation="vertical" 
                    :aria-labelledby="'user-menu-button-' + item.id" 
                    tabindex="-1">

                    <a v-if="item.link" v-for="item in setting" :key="item.id" :href="item.action" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                        :id="'user-menu-item-0-' + index">{{ item.name }}</a>
                    <a v-if="!item.link" v-for="item in setting" :key="item.id" @click="item.action" class="block px-4 py-2 text-sm text-gray-700 cursor-pointer" role="menuitem" tabindex="-1"
                     :id="'user-menu-item-0-' + index">{{ item.name }}</a>

                </div> -->
            </div>
        </li>
    </ul>
</template>

<script setup>
import { ref, watch, defineProps } from "vue";

const props = defineProps(['items', 'setting'])

// const showSettings = ref(Array(props.items.length).fill(false));

// watch(props.items, (newPeople) => {
//   showSettings.value = Array(newPeople.length).fill(false);
// }, { immediate: true });

// const openSetting = (index) => {
//   showSettings.value = showSettings.value.map((_, i) => i === index);
// };

</script>
