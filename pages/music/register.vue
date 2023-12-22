<template>
  <base-layout>
  <static-header :item="'Cadastro de novas Músicas'" />

    <div class="px-14 max-w-7xl sm:py-6 sm:px-8 lg:px-14">

      <general-form>
        <div class="space-y-12">


          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Cadastrar música</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">Informe os dados abaixo para cadastrar uma nova música.</p>
            <div class="grid grid-cols-2 gap-4 mt-5">
              <div>
                <general-input-text :label="'Titulo'" :model="'title'"/>
              </div>
              <div>
                <general-input-select  :label="'Cantor'" :model="select"/>
              </div>


            </div>
            <div class="grid grid-cols-3 gap-4 mt-5">
              <div>
                <general-input-select :label="'Nota'" :model="select"/>

              </div>
              <div>
                <general-input-select  :label="'Ritmo'" :model="select"/>

              </div>
              <div>
                <general-input-text :label="'BPM'" :model="'bpm'"/>

              </div>

            </div>


          </div>

          <div class="border-b border-gray-900/10 pb-12">


            <div class="mt-10 space-y-10">

              <fieldset>
                <legend class="text-sm font-semibold leading-6 text-gray-900">Música em destaque</legend>
                <p class="mt-1 text-sm leading-6 text-gray-600">Adicione a música em destaque ou não para aparecer na página incial</p>
                <div class="mt-6 space-y-6">
                  <general-input-radio :label="'Em destaque'"/>

                   <general-input-radio :label="'Normal'"/>

                </div>
              </fieldset>
            </div>
          </div>
          <general-ckeditor />
        </div>

      </general-form>

    </div>
  </base-layout>
</template>
  
<script setup>

const select = [
  {item: 'estados unidos'},
  {item: 'estados unidos'},
  {item: 'estados unidos'},

]

</script>
  