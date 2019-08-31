<template>
  <q-page padding>
    <h3>Music Chart</h3>
    <bar-chart :chart-data="chartData"></bar-chart>
  </q-page>
</template>

<script>
  import Barchart from '../components/Chart'
  export default {
    components:{
      BarChart
    },
    methods: {
      data(){
        return{
          chartData: {},
          musicData: [],
          musicLables: [],
          music: []
        }
      },
      createated(){
        this.$bind('music',this.$db.collection('music')).then( () => {

        })
      },
      mounted(){
        this.fillData()
      },
      fillData(){
        this.getMusicPlayed()
        // this.

      }
    }

  }
</script>

<style>
</style>
