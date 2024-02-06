<template>
    <div class="border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li v-for="item in items" :key="item.name" class="me-2">
                <a @click="item.action"
                    class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                   <div  v-html="item.icon">

                   </div> {{ item.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: []
  }
});

</script>
