import {createApp} from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import Navbar from './components/Navbar.vue'
import TaskInput from './components/TaskInput.vue'
import TaskItem from './components/TaskItem.vue'

import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faEdit)
const app = createApp(App)

app.component('navbar', Navbar)
app.component('task-input', TaskInput)
app.component('task-item', TaskItem)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
