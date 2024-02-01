<template>
  <base-layout>
    <static-header :item="'Cadastro de novas Músicas'" />

    <div class="px-14 max-w-7xl sm:py-6 sm:px-8 lg:px-14">

      <general-form :action="actions" :submit="storeMusic">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Cadastrar música</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">Informe os dados abaixo para cadastrar uma nova música.</p>
            <div class="grid grid-cols-2 gap-4 mt-5">
              <div>
                <general-input-text :label="'Titulo'" v-model="items.title" />
              </div>
              <div>
                <general-input-select :label="'Cantor'" :item-name="'name_singer'" :model="singers"
                  v-model="items.singer_id" />
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 mt-5">
              <div>
                <general-input-select :label="'Nota'" :item-name="'name_note'" :model="notes" v-model="items.note_id" />
              </div>
              <div>
                <general-input-select :label="'Ritmo'" :item-name="'name_rhythm'" :model="rhythms"
                  v-model="items.rhythm_id" />
              </div>
              <div>
                <general-input-text :label="'BPM'" v-model="items.bpm" />
              </div>
            </div>
          </div>
          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 space-y-10">
              <fieldset>
                <legend class="text-sm font-semibold leading-6 text-gray-900">Música em destaque</legend>
                <p class="mt-1 text-sm leading-6 text-gray-600">Adicione a música em destaque ou não para aparecer na
                  página incial</p>
                <div class="mt-6 space-y-6">
                  <general-input-radio :label="'Em destaque'" v-model="items.highlight" />
                  <general-input-radio :label="'Normal'" v-model="items.notHighlight" />
                </div>
              </fieldset>
            </div>
          </div>
          <general-ckeditor v-model="items.lyrics" />
        </div>
      </general-form>

    </div>
  </base-layout>
</template>

<script setup>
import { computed, ref, watch, watchEffect } from "vue";
import { useStore } from "@nuxtjs/composition-api";

const store = useStore();

const items = ref({
  title: '',
  singer_id: '',
  note_id: '',
  rhythm_id: '',
  bpm: '',
  highlight: false,
  notHighlight: true,
  lyrics: ''
});

watchEffect(() => {
  items.value.notHighlight ? items.value.highlight = false : items.value.highlight = true;
});

watchEffect(() => {
  items.value.highlight ? items.value.notHighlight = false : items.value.notHighlight = true;
});

const singers = computed(() => store.state.singer.data);
const notes = computed(() => store.state.note.data);
const rhythms = computed(() => store.state.rhythm.data);

const actions = ref(['singer/getSingers', 'note/getNotes', 'rhythm/getRhythms']);

const storeMusic = () => {
  console.log(items.value, 'items entrou');
  store.dispatch('music/storeMusic', items.value);
}


</script>

