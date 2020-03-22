<template>
    <div>
        <div>
            <section>
                <div class="block">
                    <b-radio v-model="radio"
                        name="name"
                        native-value="cases">
                        Cases
                    </b-radio>
                    <b-radio v-model="radio"
                        name="name"
                        native-value="deaths">
                        Deaths
                    </b-radio>
                    <b-radio v-model="radio"
                        name="name"
                        native-value="recovered">
                        Recovered
                    </b-radio>
                </div>
            </section>
        </div>

        <app-linechart  :chartData="chartData"
                        :options="options"></app-linechart>
    </div>
</template>
<script>
import Linechart from '@/components/Charts/LineChart'
export default {
    props: ['countryData'],
    computed: {
        cases: function () {
            return this.countryData[0].timeline.cases
        },
        deaths: function () {
            return this.countryData[0].timeline.deaths
        },
        recovered: function () {
            return this.countryData[0].timeline.recovered
        },
        dates: function () {
            const returnDates = []
            const keys = Object.keys(this.cases)
            for (const key of keys) {
                returnDates.push(key)
            }
            return returnDates
        },
        valuesCases: function() {
            const returnValues = []
            const values = Object.values(this.cases)
            for (const value of values) {
                returnValues.push(value)
            }
            return returnValues
        },
         values: function() {
            const returnValues = []
            let values = null
            switch(this.radio) {
                case 'cases' :
                    values = Object.values(this.cases) 
                    break;
                case 'deaths' :
                    values = Object.values(this.deaths)
                    break;
                case 'recovered' :
                     values = Object.values(this.recovered)
                     break;
            }
            for (const value of values) {
                returnValues.push(value)
            }
            return returnValues
        },
        chartData: function () {
            return       {
                    labels: this.dates,
                    datasets: [
                    {
                        label: "No occurrences",
                        data: this.values,
                        backgroundColor: "transparent",
                        borderColor: "rgba(1, 116, 188, 0.50)",
                        pointBackgroundColor: "rgba(171, 71, 188, 1)"
                    }
                    ]
             }
        },
     },
    watch: {
        chartData: function() {
            console.log('Changed')

        }
    },
    data: function () {
        return {
            radio: 'cases',
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                display: true,
                text: "Sweden"
                }
            }
        }
    },
    components: {
        'app-linechart': Linechart
    }
}
</script>
<style scoped>

</style>