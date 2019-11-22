import axios from 'axios'

const peopleModel = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  current: null,
  listing: false
}

const people = {
  namespaced: true,
  state: () => {
    return Object.assign({}, peopleModel)
  },
  mutations: {
    save (state, payload) {
      state[payload.key] = payload.value
    },
    reset (state) {
      Object.assign(state, peopleModel)
    }
  },
  actions: {
    save ({ commit }, payload) {
      commit('save', { key: payload[0], value: payload[1] })
    },
    add ({ commit, state }, payload) {
      const results = state.results
      commit('save', { key: 'results', value: [...results, ...payload] })
    },
    async load ({ dispatch, getters }, params = {}) {
      try {
        let people = {}
        dispatch('save', ['listing', true])

        if (!getters.next) {
          people = await axios.get('people/', { params })
        } else {
          people = await axios.get(getters.next)
        }

        dispatch('save', ['count', people.data.count])
        dispatch('save', ['next', people.data.next])
        dispatch('save', ['previous', people.data.previous])
        dispatch('add', people.data.results)
        dispatch('save', ['listing', false])
      } catch (e) {
        dispatch('save', ['listing', false])
        alert('Algo está errado!')
      }
    },
    async loadCurrent ({ dispatch }, id) {
      dispatch('save', ['listing', true])
      try {
        const { data } = await axios.get(`people/${id}/`)

        dispatch('save', ['current', data])
        dispatch('save', ['listing', false])
      } catch (e) {
        dispatch('save', ['listing', false])
        alert('Algo está errado!')
      }
    }
  },
  getters: {
    filtered (state) {
      return state.results
    },
    next (state) {
      if (state.next) {
        return state.next.replace('https://swapi.co/api/', '')
      }

      return state.next
    }
  }
}

export default people