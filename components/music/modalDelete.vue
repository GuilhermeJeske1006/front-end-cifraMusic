
<template>
  <general-modal
    :customClass="'sm:ml-3 text-white shadow-sm hover:bg-red-500 bg-red-600'"
    :open.sync="open"
    :fn="remove"
    :label="'Excluir'"
  >
    <div class=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
      <div class="mb-4 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
        <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      </div>
      <div class="sm:flex sm:items-start">

        <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Você tem certeza?</h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">Tem certeza de que deseja remover a música {{ item.title }}? Todos os seus dados serão removidos permanentemente. Essa ação não pode ser desfeita.</p>
          </div>

        </div>
      </div>
    </div>

  </general-modal>
</template>

<script setup>
import { useStore } from '@nuxtjs/composition-api';
import { defineEmits, defineProps, ref, watch } from 'vue';

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Object,
    default: {},
  },
  selectTab: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(['update:open']);

watch(() => props.open, (newValue) => {
  emits('update:open', newValue);

});
const store = useStore();

const remove = () => {
  emits('update:open', false);
  store.dispatch('music/deleteMusic', props.item.id).then(() => {
    if (props.selectTab === 0){
    store.dispatch('music/ListMusic', { page: 1  });
    }
    if (props.selectTab === 1){
      store.dispatch('singer/getSingers', { page: 1 });
    } 
    if (props.selectTab === 2) {
      store.dispatch('rhythm/getRhythms', { page: 1 });
    } 
    if (props.selectTab === 3) {
      store.dispatch('music/HighLightMusic');
    }
  });

}

</script>


