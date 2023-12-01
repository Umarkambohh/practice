<script setup>
import { reactive } from 'vue';

let num = reactive({ a: 10, b: 20 });
setTimeout(() => {
    console.log('setTimout called');
    console.log('num', num);
    num.a = 30;
    console.log('a:', num.a);
}, 3000);
setTimeOut;
</script>
<template>
    <h1>{{ (num.a = num.b) }}</h1>
</template>

<style scoped></style>
