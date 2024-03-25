<template>
    <div>
      <input type="text" v-model="todo">
      <button @click="addOrUpdateTodo">{{ editingIndex === null ? 'Create todo' : 'Update todo' }}</button>
      <ul>
        <li v-for="(item, index) in todoAry" :key="index">
          {{ item }}
          <button @click="deleteTodo(index)">X</button>
          <button @click="editTodo(index)">Edit</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const todoAry = ref([]);
      const todo = ref('');
      const editingIndex = ref(null);
  
      const addOrUpdateTodo = () => {
        if (todo.value === "") {
          return alert('please fill')
        } else {
          if (editingIndex.value === null) {
            todoAry.value.push(todo.value);
  
          } else {
            todoAry.value[editingIndex.value] = todo.value;
            editingIndex.value = null;
          }
        }
        todo.value = '';
      }
  
      const deleteTodo = (index) => {
        todoAry.value.splice(index, 1);
      }
  
      const editTodo = (index) => {
        todo.value = todoAry.value[index];
        editingIndex.value = index;
      }
  
      return {
        todoAry,
        todo,
        addOrUpdateTodo,
        deleteTodo,
        editTodo,
        todo,
        editingIndex,
      }
    }
  }
  </script>
  