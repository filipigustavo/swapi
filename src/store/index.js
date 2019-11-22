import Vue from 'vue'
import Vuex from 'vuex'

import people from './people'
import filter from './filter'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    people,
    filter
  }
})

export default store