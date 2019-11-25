const filterModel = {
  gender: null,
  birth: ''
}

const filter = {
  namespaced: true,
  state: () => {
    return Object.assign({}, filterModel)
  },
  mutations: {
    save (state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    save ({ commit }, payload) {
      commit('save', { key: payload[0], value: payload[1] })
    }
  },
  getters: {
    gender (state) {
      return state.gender
    },
    birth (state) {
      return state.birth
    }
  }
}

export default filter