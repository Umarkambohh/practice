<template>
    <div class="accordion" v-for="(item , index) in items" :key="index">
        <button @click="toggleAccordion(index)">{{ item.title }}</button>
        <div class="accordion--content" v-if="activeAccordion === index">{{ item.disc }}</div>
    </div>

</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const activeAccordion = ref(null);

        const toggleAccordion = (index) => {
            activeAccordion.value === index ? activeAccordion.value = null : activeAccordion.value = index ;
        }

        const items = ref([
            {
                title: 'items one',
                disc: 'thisis content one'
            },
            {
                title: 'items two',
                disc: 'thisis content two'
            },
            {
                title: 'items three',
                disc: 'thisis content three'
            },
        ])
        return {
            activeAccordion,
            items,
            toggleAccordion,
        }
    }
}
</script>

<style scoped>
button{
    display: block;
    width: 30%;
    margin-bottom: 15px;
}
</style>