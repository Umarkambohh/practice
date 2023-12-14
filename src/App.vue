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
    <select-dropdown />
    <dropdown />
    <ImageUpload />
</template>
<script>
import { defineComponent, ref } from "vue";
import SelectDropdown from "./components/SelectDropdown.vue";
import Dropdown from "./components/Dropdown.vue";
import ImageUpload from "./components/ImageUpload.vue";

export default defineComponent({
    name: "Parent",
    components: {
        SelectDropdown,
        Dropdown,
        ImageUpload,
    },
    setup() {
        return {}
    }
})

</script>
<!-- dropdown end -->
