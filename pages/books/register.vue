<template>
  <base-layout>
  <static-header :item="'Criar nova apostila'" />

    <div class="px-14 max-w-7xl sm:py-6 sm:px-8 lg:px-14">

      <general-form>
        <div class="space-y-12">


          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Criar Apostila</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">Informe os dados abaixo para cadastrar uma nova apostila.</p>
            <div class="grid grid-cols-2 gap-4 mt-5">
              <div>
                <general-input-text :label="'Titulo'" :model="'title'"/>
              </div>
              <div>
                <general-input-text :label="'Subtitulo'" :model="'subtitle'"/>
              </div>


            </div>
            <div class="grid grid-cols-1 gap-4 mt-5">
              <div>
                <general-multi-select :label="'Músicas'" @selected-values="handleSelectedValues"/>

              </div>

            </div>


          </div>


          <general-ckeditor :item="selectedValues" />
        </div>

      </general-form>

    </div>
  </base-layout>
</template>
  
<script setup>
import { ref } from "vue";


const select = [
  {item: 'estados unidos'},
  {item: 'estados unidos'},
  {item: 'estados unidos'},

]

const selectedValues = ref([])

const handleSelectedValues = (values) => {
      // Manipule os valores selecionados aqui
      selectedValues.value = values;

    }

</script>
  