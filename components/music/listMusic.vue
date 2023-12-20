<template>
    <div>
      <li v-for="person in people" :key="person.email" class="flex justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">{{ person.name }}</p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ person.email }}</p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900">{{ person.lastSeen }}</p>
          <p class="mt-1 text-xs leading-5 text-gray-500">
            Nota <time>{{ person.lastSeen }}</time>
          </p>
        </div>
      </li>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Post',
    props: ['people'],
  };
  </script>
  