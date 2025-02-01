<script setup>
import { ref } from 'vue';
import TextEditor from './components/TextEditor.vue';

const content = ref("demo txt")
</script>

<template>
  <TextEditor v-model="content"/>
</template>