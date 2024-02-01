<template>
  <client-only placeholder="loading...">
    <ckeditor-nuxt
      v-model="value"
      :config="editorConfig"
      @input="handleInput"
    />
  </client-only>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  components: {
    'ckeditor-nuxt': () => import('@blowstack/ckeditor-nuxt')
  },
  data() {
    return {
      editorContent: this.value,
      editorConfig: {
        simpleUpload: {
          uploadUrl: 'path_to_image_controller',
          headers: {
            'Authorization': 'optional_token'
          }
        }
      }
    }
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value);
    }
  },
  watch: {
    value(newValue) {
      this.$emit('input', newValue);
    }
  }
}
</script>
