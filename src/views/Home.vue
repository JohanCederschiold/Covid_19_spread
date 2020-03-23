<template>
  <div class="home">
    <div class="body">
      <app-country-historical :countryData="sweden"></app-country-historical>
    </div>
  </div>
</template>

<script>
import CountryHistorical from '@/components/CountryHistorical'
export default {
  name: 'Home',
  components: {
    'app-country-historical' : CountryHistorical,
  },
  methods: {
  },
  computed: {
    sweden: function() {
      return this.$store.state.historicalData.filter(country => country.country === 'sweden')
    }
  }
}
</script>
<style scoped>
    .body {
      margin-left: 5%;
      margin-right: 5%;
      margin-top: 1%;
    }
</style>
