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
          people = await axios.get('https://swapi.co/api/people/', { params })
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
        const { data } = await axios.get(`https://swapi.co/api/people/${id}/`)

        dispatch('save', ['current', data])
        dispatch('save', ['listing', false])
      } catch (e) {
        dispatch('save', ['listing', false])
        alert('Algo está errado!')
      }
    }
  },
  getters: {
    filtered (state, getters, rootState, rootGetters) {
      let results = state.results
      const gender = rootGetters['filter/gender']
      const birth = rootGetters['filter/birth']

      if (birth.length > 0) {
        results = results.filter(r => {
          if (r.birth_year) {
            return r.birth_year.toLowerCase() === birth.toLowerCase()
          }

          return true
        })
      }

      if (gender) {
        results = results.filter(r => r.gender === gender)
      }

      return results
    },
    next (state) {
      return state.next
    },
    totalLoaded (state) {
      return state.results.length
    }
  }
}

export default people