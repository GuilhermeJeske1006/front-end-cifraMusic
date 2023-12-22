<template>
  <client-only placeholder="loading...">
    <ckeditor-nuxt v-model="contentHolder" :config="editorConfig" />
  </client-only>
</template>

<script>
export default {
  props: {
    item: {
      type: Array,
      default: () => [] // Definindo o valor padrão como um array vazio
    },
  },
  components: {
    'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } },
  },
  data() {
    return {
      editorConfig: {
        simpleUpload: {
          uploadUrl: 'path_to_image_controller',
          headers: {
            'Authorization': 'optional_token'
          }
        }
      },
      contentHolder: this.item.join('\n') // Inicializando contentHolder com os valores do array
    }
  },
  watch: {
    item(newValue) {
      // Atualizando contentHolder quando o prop "item" é alterado
      this.contentHolder = newValue.join('\n');
    },
    contentHolder(newValue) {
      // Emitindo evento quando contentHolder é alterado
      this.$emit('update:item', newValue.split('\n'));
    }
  }
}
</script>
