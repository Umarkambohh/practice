<template>
    <div class="accordion">
        <button @click="activeAccordion = 0">item one</button>
        <div class="accordion--content" v-show="activeAccordion === 0">content one</div>
        <button @click="activeAccordion = 1">item two</button>
        <div class="accordion--content" v-show="activeAccordion === 1">content two</div>
        <button @click="activeAccordion = 2">item three</button>
        <div class="accordion--content" v-show="activeAccordion === 2">content three </div>
    </div>

</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const activeAccordion = ref();


        return {
            activeAccordion,
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