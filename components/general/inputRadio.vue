<template>
  <div class="flex items-center gap-x-3">
    <input 
      :id="inputId"
      :name="name"
      type="radio"
      class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      :value="value"
      :checked="isChecked"
      @change="$emit('input', $event.target.value)"
    />
    <label :for="inputId" class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    model: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputId() {
      return `${this.name}-${this.value}`;
    },
    isChecked() {
      return this.value === true
    }
  }
}
</script>
