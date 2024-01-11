import {createApp} from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faEdit)

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import TodoPage from './pages/TodoPage.vue'
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('navbar', Navbar)
app.component('todo-page', TodoPage)
app.component('footer-item', Footer)
app.mount('#app')
