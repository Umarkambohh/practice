import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTodoStore = defineStore("todo", () => {
  const todoArray = ref([]);

  const addTodo = (item) => {
    todoArray.value = item;
  }
  
  return { todoArray, addTodo };
});