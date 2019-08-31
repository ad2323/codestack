// filepath: src/pages/counter.vue

<template>
  <q-page padding>
    <!-- content -->
    <q-card class="bg-blue text-center">
      <q-card-section>
        <h4>{{$store.getters['example/getCount']}}</h4>
      </q-card-section>
      <q-card-section>
        <q-btn label="Add" @click="plusCounter" rounded color="purple" size="80px"/>
        <q-btn label="Reset" @click="resetCounter" rounded color="purple" size="80px"/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'Counter',
  methods: {
    plusCounter () {
      this.$store.commit('example/addCounter')
    },
    resetCounter () {
      this.$store.commit('example/resetCounter')
    }
  }
}
</script>

<style>
</style>
w
