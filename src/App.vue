<!-- emit statr -->
<!-- <template>
    <h1>here is the value: {{ reciveData }}</h1>
    <emit @data-to-parent="handleDataFromChiild" />
</template>

<script>
import { defineComponent, ref } from "vue";
import Emit from "./components/Emit.vue";

export default defineComponent({
    name: "ParentComponent",
    components: {
        Emit,
    },

    setup() {
        const reciveData = ref("")

        const handleDataFromChiild = (data) => {
            reciveData.value = data
        }
        return {
            reciveData,
            handleDataFromChiild
        }
    }
})
</script> -->
<!-- emit end -->

<!-- dropdown start -->
<template>
    <!-- <select-dropdown /> -->
    <!-- <select-filterable :source="countries" @valueToParent="recivedFromChild" /> -->
    <!-- <h1>Value Form Child: {{ recivedValue }}</h1> -->
    <!-- <dropdown /> -->
    <!-- <ImageUpload /> -->
    <!-- <pinia /> -->
    <accordion />
</template>
<script>
import { defineComponent, ref } from "vue";
// import SelectDropdown from "@/components/SelectDropdown.vue";
import SelectFilterable from "@/components/SelectFilterable.vue";
// import Dropdown from "./components/Dropdown.vue";
// import ImageUpload from "./components/ImageUpload.vue";
// import Pinia from "@/components/Pinia.vue";
import accordion from "@/components/accordion.vue";

export default defineComponent({
    name: "Parent",
    components: {
        // SelectDropdown,
        // SelectFilterable,
        // Dropdown,
        // ImageUpload,
        // Pinia,
        accordion,
    },
    setup() {
        const recivedValue = ref('');

        const countries = ref([
            {
                name:'algeria',
            },
            {
                name:'pakistan',
            },
            {
                name:'america',
            },
            {
                name:'india',
            },
        ])

        const recivedFromChild = (value) => {
            recivedValue.value = value;``
        }
        return {
            countries,
            recivedValue,
            recivedFromChild,
        }
    }
})

</script>
<!-- dropdown end -->
