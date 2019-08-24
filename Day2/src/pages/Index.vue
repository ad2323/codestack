<template>
  <q-page padding>
    <div class="q-pa-md row container-fluid">
      <!-- OUTPUT PORTION -->
      <div class="container cols-xs-12">
        <div class="row">
          <p>First Name is : {{firstName}}</p>
        </div>
      </div>

      Last Name <input class="col-xs-12 q-mx-md " type="text" name="lastName" placeholder="Last Name" v-model="lastName">
      First Name <input class="col-xs-12 q-mx-md" type="text" name="firstName" placeholder="First Name" v-model="firstName" >
      Middle Name <input class="col-xs-12 q-mx-md" type="text" name="middleName" placeholder="Middle Name" v-model="middleName">
      Birthday <input class="col-xs-12 q-mx-md" type="date" name="birthday" placeholder="Birthday" v-model="birthday">
      Address <textarea class="col-xs-12 q-mx-md" name="fullAddress" placeholder="Full Address" rows="5" cols="20" v-model="address"></textarea>
      <div id="gender" class="col-xs-12">
        Gender
        <input class="" type="radio" name="gender" value="male">Male
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
        lastName:'Cenizal',
        firstName:'Adrian',
        middleName:'Escubido',
        address:'Addresssssss',
        birthday:'23/09/1996',
        gender:'male',
        civil:'single',
      }
    }
  }

</script>
