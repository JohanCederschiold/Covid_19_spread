<template>
  <div id="app">
    <div>
      <app-navigation v-if="this.$store.state.historicalData !== null"></app-navigation>
    </div>
  </div>
</template>
<script>
import Navigation from '@/views/Navigation'
export default {
  methods: {
    getHistoricalData() {
      fetch(this.historicalDataEndpoint)
        .then(response => {return response.json()})
        .then(result => this.$store.commit('setHistoricalData', result))
    }
  }, 
  data: function () {
    return {
      historicalData: null,
      historicalDataEndpoint: 'https://corona.lmao.ninja/historical'
    }
  },
  created: function () {
    this.getHistoricalData()
  },
  components: {
    'app-navigation': Navigation
  }
}
</script>
<style>
</style>
