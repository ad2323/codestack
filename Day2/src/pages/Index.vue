<template>
  <q-page padding>
    <div class="q-pa-md row container-fluid">
      <!-- OUTPUT PORTION -->
      <div class="container cols-xs-12">
        <div class="row">
          <p>First Name is : {{firstName}}</p>
        </div>
      </div>

      Last Name <input class="col-xs-12 q-mx-md " type="text" name="lastName" placeholder="Last Name">
      First Name <input class="col-xs-12 q-mx-md" type="text" name="firstName" placeholder="First Name">
      Middle Name <input class="col-xs-12 q-mx-md" type="text" name="middleName" placeholder="Middle Name">
      Birthday <input class="col-xs-12 q-mx-md" type="date" name="birthDay" placeholder="Birthday">
      Address <textarea class="col-xs-12 q-mx-md" name="fullAddress" placeholder="Full Address" rows="5" cols="20"></textarea>
      <div id="gender" class="col-xs-12">
        Gender
        <input class="" type="radio" name="gender" value="male" checked>Male
        <input class="" type="radio" name="gender" value="female">Female
        <input class="" type="radio" name="gender" value="other">Other
      </div>

      Civil Status
      <select name="civil" class="col-xs-12 q-mx-md">
        <option value="" selected disabled>Civil Status</option>
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="widowed">Widowed</option>
        <option value="divorce">Divorced</option>
      </select>
    </div>
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
    },
    data(){
      return {
        firstName:'Adrian'
      }
    }
  }

</script>
