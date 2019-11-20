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
  // LinkPlugin,
  NavbarPlugin,
  SpinnerPlugin
} from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

import App from './App.vue'
import Layout from './components/Layout'
import Home from './pages/Home'
import People from './pages/People'

import './assets/main.scss'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/people', component: People }
]

const router = new VueRouter({ routes })

Vue.use(ButtonPlugin)
Vue.use(CardPlugin)
// Vue.use(CollapsePlugin)
Vue.use(FormPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormSelectPlugin)
Vue.use(LayoutPlugin)
// Vue.use(LinkPlugin)
Vue.use(NavbarPlugin)
Vue.use(SpinnerPlugin)

Vue.component('Layout', Layout)

axios.defaults.baseURL = 'https://swapi.co/api/'
Vue.use(VueAxios, axios)

Vue.use(Vuex)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
