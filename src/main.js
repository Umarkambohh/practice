import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const pinia = createPinia()
const app = createApp(App)
app.component('QuillEditor', QuillEditor)

app.use(pinia)
app.mount('#app')