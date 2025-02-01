<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
  }
});
</script>

<template>
  <div id="my-toolbar">
    <button>sds</button>
    <button class="ql-bold"></button>
    <button class="ql-italic"></button>
  </div>
  <QuillEditor v-model:content="props.modelValue" contentType="html" toolbar="#my-toolbar"></QuillEditor>
</template>
