<template>
    <div>
        <!-- Use @input event to detect changes in the input field -->
        <input type="text" v-model="search" @input="handleInputChange">
        <button @click="emptyField">x</button>
        <ul v-show="searchResults.length && isOpen">
            <li v-for="s in searchResults" :key="s.name" @click="setSearchItem(s.name)">{{ s.name }}</li>
        </ul>
    </div>

    <button @click="sendToParent">Send to Parent</button>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    props: {
        source: {
            type: Array,
            required: true
        }
    },
    emits: ['valueToParent'],
    setup(props, { emit }) {
        const search = ref('');
        const isOpen = ref(true);

        const searchResults = computed(() => {
            if (search.value === '') {
                return [];
            }

            return props.source.filter((item) => {
                return item.name.toLowerCase().includes(search.value.toLowerCase());
            });
        });

        const setSearchItem = (select) => {
            search.value = select;
            isOpen.value = false;
        };

        const sendToParent = () => {
            emit('valueToParent', search.value);
        };

        const handleInputChange = () => {
            if (search.value === '') {
                isOpen.value = true; 
            }
        };

        const emptyField = () => {
            search.value = ""
            isOpen.value = true;
        }

        return {
            search,
            searchResults,
            setSearchItem,
            sendToParent,
            isOpen,
            handleInputChange,
            emptyField,
        };
    }
};
</script>
