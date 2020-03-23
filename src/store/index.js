import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testdata: 'I am in vuex',
    historicalData: null,
    todaysData: null
  },
  mutations: {
    setHistoricalData(state, data) {
      state.historicalData = data
    },
    setTodaysData(state, data) {
      state.todaysData = data
    }

  },
  actions: {
  },
  modules: {
  }
})
