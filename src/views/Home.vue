<template>
  <div class="home">
      <app-country-historical :countryData="sweden"></app-country-historical>
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
    getSweden() {
      return this.$store.state.historicalData.filter(country => country.country === 'Sweden')
    }
  },
  computed: {
    sweden: function() {
      return this.$store.state.historicalData.filter(country => country.country === 'Sweden')
    }
  }
}
</script>
