<template>
    <div class="dropdown-wrapper" ref="dropdown">
        <div class="dropdown-selected-option" @click="showDropdown">
            {{ mappedSelectedOption }}
        </div>
        <div class="option-wrapper" v-if="hideDropdown">
            <div class="option" v-for="(option, index) in options" :key="index" @click="toggleOptionSelect(option)">
                {{ option.name || option }}
            </div>
        </div>
    </div>
</template>
<script>
import { computed, defineComponent, ref, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
    setup() {
        const options = ref([
            { name: "one", value: 1 },
            { name: "two", value: 2 },
            { name: "three", value: 2 },
        ]);

        const selectedOption = ref(null);
        const hideDropdown = ref(false);
        const dropdown = ref(null);

        const toggleOptionSelect = (option) => {
            selectedOption.value = option;
            hideDropdown.value = false;
        };

        const showDropdown = () => {
            hideDropdown.value = true;
        };

        const mappedSelectedOption = computed(() => {
            return (selectedOption.value?.name) || selectedOption.value || "select a value";
        });

        const closeDropdown = (element) => {
            if (!dropdown.value.contains(element.target)) {
                hideDropdown.value = false;
            }
        };

        onMounted(() => {
            dropdown.value = $refs.dropdown; // Assigning the DOM element to the dropdown ref
            window.addEventListener("click", closeDropdown); // Corrected the method name
        });

        onBeforeUnmount(() => {
            window.removeEventListener("click", closeDropdown); // Corrected the method name
        });

        return {
            options,
            selectedOption,
            toggleOptionSelect,
            mappedSelectedOption,
            hideDropdown,
            showDropdown,
            dropdown,
        };
    },
});
</script>
<style lang="scss">
.dropdown-wrapper {
    width: 300px;
}

.dropdown-selected-option {
    height: 50px;
    border: 1px solid;
}

.option {
    padding: 5px 10px;
    border: 1px solid black;

    &:hover {
        background-color: green;
    }
}
</style>
