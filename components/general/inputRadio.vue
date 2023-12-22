<template>
    <div class="flex items-center gap-x-3">
        <input id="push-email" name="push-notifications" type="radio"
                      class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                    <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
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