<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <h3>{{ $store.getters['example/getCount']}}</h3>
      </q-card-section>
      <q-card-section>
        <q-btn label="Add" @click = "plusCounter" rounded color="purple" size="15pt"/>
        <q-btn label="Reset" @click= "resetCounter" rounded color="red" size="15pt"/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  methods: {
    plusCounter(){
      this.$store.commit('example/addCounter')
    },
    resetCounter(){
      this.$store.commit('example/resetCounter')
    }
  }
}
</script>

<style>
</style>
