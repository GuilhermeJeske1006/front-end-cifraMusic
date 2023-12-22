<template>
    <div>
      <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">{{ label }}</label>
      <div class="mt-2.5">
        <multiselect
          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          v-model="value"
          :options="options"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
          placeholder="Pick some"
          label="name"
          track-by="name"
          :preselect-first="true"
          @input="emitSelectedValues"
        >
          <template slot="selection" slot-scope="{ values, search, isOpen }">
            <span class="multiselect__single" v-if="values.length" v-show="!isOpen">
              {{ values.length }} options selected
            </span>
          </template>
        </multiselect>
      </div>
    </div>
  </template>
  
  <script>
  import Multiselect from 'vue-multiselect'
  
  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
    },
    components: {
      Multiselect
    },
    data() {
      return {
        value: [],
        options: [
          { name: 'Vue.js', language: 'JavaScript' },
          { name: 'Adonis', language: 'JavaScript' },
          { name: 'Rails', language: 'Ruby' },
          { name: 'Sinatra', language: 'Ruby' },
          { name: 'Laravel', language: 'PHP' },
          { name: 'Phoenix', language: 'Elixir' }
        ]
      }
    },
    methods: {
      emitSelectedValues() {
        // Emitindo um evento chamado 'selected-values' com os valores selecionados
        this.$emit('selected-values', this.value);
      }
    }
  }
  </script>
  
  <!-- New step!
       Add Multiselect CSS. Can be added as a static asset or inside a component. -->
  <style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
  