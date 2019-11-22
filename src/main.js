import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  ButtonPlugin,
  CardPlugin,
  // CollapsePlugin,
  FormPlugin,
  FormInputPlugin,
  FormSelectPlugin,
  LayoutPlugin,
  LinkPlugin,
  NavbarPlugin,
  SpinnerPlugin
} from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import Layout from './components/Layout'
import Home from './pages/Home'
import People from './pages/People'

import './assets/main.scss'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/people/:id', component: People }
]

const router = new VueRouter({ routes })

Vue.use(ButtonPlugin)
Vue.use(CardPlugin)
// Vue.use(CollapsePlugin)
Vue.use(FormPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormSelectPlugin)
Vue.use(LayoutPlugin)
Vue.use(LinkPlugin)
Vue.use(NavbarPlugin)
Vue.use(SpinnerPlugin)

Vue.component('Layout', Layout)

axios.defaults.baseURL = 'https://swapi.co/api/'
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
