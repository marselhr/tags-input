import {createApp} from 'vue'
import App from './App.vue'
import TagInput from './components/TagInput.vue'
const app = createApp(App)


app.component('tag-input', TagInput)
app.mount('#app')
