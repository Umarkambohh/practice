<template>
  <input type="text" v-model="todoValue" @input="data.addTodo(todoValue)">

  <ul>
    <li>{{ data.todoArray }}</li>
  </ul>
</template>
<script>
import { ref } from 'vue';
import { useTodoStore } from "@/store/store.js";
export default {
  setup() {
    const data = useTodoStore();
    const todoValue = ref("");

    return {
      data,
      todoValue,
    }
  }
}
</script>
