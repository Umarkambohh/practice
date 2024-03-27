<template>
    <div v-for="item in items">
        <h1>{{ item.headng}}</h1>
        <p>{{ item.para}}</p>
        <img :src="item.img" height="200" width="200" alt="">

        <button @click="add(item)">add</button>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        const items = ref([
            {
                headng: 'this is heading',
                para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, magni.',
                img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
            }
        ])
        const add = (item) => {
            console.log(item);
        }
        return {
            add,
            items,
        }
    }
}
</script>