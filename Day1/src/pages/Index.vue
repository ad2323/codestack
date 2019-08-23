<template>
  <q-page class="flex flex-center">
    <q-form>
      <input class="" type="text" placeholder="Last Name"><br>
      <input class="" type="text" placeholder="First Name"><br>
      <input class="" type="text" placeholder="Middle Name"><br>
      <input class="" type="date" placeholder="Birthday"><br>
      <textarea class="" placeholder="Full Address" rows="5" cols="20"></textarea><br>
      <input class="" type="radio" name="gender" value="male" checked>Male<br>
      <input class="" type="radio" name="gender" value="female">Female<br>
      <input class="" type="radio" name="gender" value="other">Other<br>
      <select name="civil">
        <option value="" selected>Civil Status</option>
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="widowed">Widowed</option>
        <option value="divorce">Divorced</option>
      </select>
    </q-form>
  </q-page>

</template>

<style>
</style>

<script>
  export default {
    name: 'PageIndex',
    data () {
      return {
        date: '2019/02/01'
      }
    }
  }

</script>
