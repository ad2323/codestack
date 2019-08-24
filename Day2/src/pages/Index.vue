<template>
  <q-page class="flex flex-center">
    <q-form>
      <label for="lastName">Last Name</label>
      <input class="" type="text" name="lastName" placeholder="Last Name"><br>
      <label for="firstName">First Name</label>
      <input class="" type="text" name="firstName" placeholder="First Name"><br>
      <label for="middleName">Middle Name</label>
      <input class="" type="text" name="middleName" placeholder="Middle Name"><br>
      <label for="birthday">Birthday</label>
      <input class="" type="date" name="birthDay" placeholder="Birthday"><br>
      <label for="fullAddress">Address</label>
      <textarea class="" name="fullAddress" placeholder="Full Address" rows="5" cols="20"></textarea><br>
      <label for="gender">Gender</label><br>
      <input class="" type="radio" name="gender" value="male" checked>Male<br>
      <input class="" type="radio" name="gender" value="female">Female<br>
      <input class="" type="radio" name="gender" value="other">Other<br>
      <label for="civil">Civil Status</label>
      <select name="civil">
        <option value="" selected disabled>Civil Status</option>
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
