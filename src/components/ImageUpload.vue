<template>
    <div>
        <input type="file" @change="handleFileInputChange" accept="image/*">
        <div v-if="selectedImage">
            <img :src="selectedImage" alt="Selected Image">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const selectedImage = ref(null);

        const handleFileInputChange = (event) => {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    selectedImage.value = reader.result;
                };
            } else {
                selectedImage.value = null;
                // Notify the user that the selected file is not an image
                alert('Please select an image file.');
            }
        };

        return {
            selectedImage,
            handleFileInputChange
        };
    }
};
</script>
