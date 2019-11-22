import Vue from 'vue'
import Vuex from 'vuex'

import people from './people'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    people
  }
})

export default store