<template>
    <div>
      <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">{{ label }}</label>
      <div class="mt-2.5">
        <input
          type="text"
          name="first-name"
          id="first-name"
          autocomplete="given-name"
          class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          :value="model" 
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String, 
        default: '' 
      },
      model: {
        type: String, 
        default: '' 
      },
    }
  }
  </script>
  