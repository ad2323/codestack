<template>
  <q-page padding>
    <div class="q-pa-md row">
      <!-- <p>Last name is: {{fname}}</p>
      <p>the sum of two numbers is {{num1 + num2}}</p>
      <p>array {{array1}}</p>
      <p>objects {{obj1}}</p>
      <p>Conditioning {{1 > null}}</p> -->
      <q-input filled class="col-xs-12 col-md-6 col-lg-4 q-pa-md" v-model="lname" standout="bg-red text-white" label="Last Name" />
      <q-input filled class="col-xs-12 col-md-6 col-lg-4 q-pa-md" v-model="fname" standout="bg-red text-white" label="First Name" />
      <q-input filled class="col-xs-12 col-md-6 col-lg-4 q-pa-md" v-model="mname" standout="bg-red text-white" label="Middle Name" />
      <q-input filled class="col-xs-12 col-md-6 col-lg-4 q-pa-md" v-model="date" mask="##/##/####" label="Birthdate">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input
        filled
        label="Full Address"
        v-model="fulladdress"
        type="textarea"
        class="col-xs-12 col-md-12 col-lg-12 q-pa-md"
      />
      <!-- Last Name<input class="col-xs-12 q-mx-md" type="text" placeholder="Last Name" v-model="fname" name="Last Name" id="">
      First Name<input class="col-xs-12 q-mx-md" type="text" placeholder="First Name" name="First Name" id="">
      Middle Name<input class="col-xs-12 q-mx-md" type="text" placeholder="Middle Name" name="Middle Name" id="">
      Birthday<input class="col-xs-12 q-mx-md" type="date" placeholder="Birthday" name="Birthday" id="">
      Full Address<textarea class="col-xs-12 q-mx-md" placeholder="Full Address" name="Full Address" id="" rows="4" cols="50" /> -->
      <div id="gender" class="col-xs-12 col-md-6 col-lg-6 q-pa-md">
        Gender
        <q-radio v-model="gender" val="Male" label="Male" />
        <q-radio v-model="gender" val="Female" label="Female" />
      </div>
      <div class="col-xs-12 col-md-12 col-lg-6 q-pa-md">
        Civil Status
        <q-select filled v-model="cStatus" :options="options" label="Filled" />
      </div>
      <div class="col-xs-12" v-if="cStatus == 'Married' ">
        Nam e of your husband/wife
        <q-input filled class="col-xs-12 col-md-6 col-lg-4 q-pa-md" v-model="fullname" standout="bg-red text-white" label="Name of your husband/wife" />
        <!-- <input type="text" v-model="fullname" name="" id=""> -->
      </div>
      <div class="col-xs-12 col-md-12 col-lg-12 q-pa-md" v-if="cStatus == 'Single' ">
        Mag mingle kana!
        <!-- <input type="text" v-model="fullname" name="" id=""> -->
      </div>
      <div class="col-xs-12 col-md-12 col-lg-12 q-pa-md" v-for="(edu, index) in education" :key="index">
        <!-- <input type="text" v-model="edu.school" name="" id=""> -->
        <div class="col-xs-12 col-md-6 col-lg-6">
          <q-input filled v-model="edu.school" standout="bg-red text-white" label="Name of School" />
        </div>
        <div class="col-xs-12 col-md-6 col-lg-6">
          <q-btn color="red" class="q-pa-xs" @click="delSchool(index)" rounded size="xs" icon="delete" />
        </div>
        <!-- <button @click="delSchool(index)">Delete School</button> -->

      </div>
      <div class="col-xs-12 col-md-12 col-lg-12 q-pa-md" >
        <q-btn color="primary" @click="addSchool" label="Add School" />
      </div>
      <div class="col-xs-12 col-md-12 col-lg-12 q-pa-md" >
        <q-btn color="primary" @click="submission" label="Submit" />
        <q-btn color="primary" to="/newpage"  label="New Page" />
        <q-btn color="primary" to="/counter"  label="Counter Page" />
      </div>
    </div>
  </q-page>
</template>

<style>
.something {
  padding: 15px;
}
</style>

<script>
export default {
  name: 'PageIndex',
  methods: {
    addSchool () {
      // dito ilalagay yung mga logics
      this.education.push({
        school: ""
      })
    },
    delSchool (index) {
      this.education.splice(index, 1)
    },
    submission(){
      if(  this.lname <= 0 ){
        this.$q.notify({
          message: "First Name Required!",
          timeOut: 2500,
          color: "red",
          icon: "error"
        })
      }
      else if( this.fname.length <= 0 ){
        this.$q.notify({
          message: "Last Name Required!",
          timeOut: 2500,
          color: "red",
          icon: "error"
        })
      }
      // else if( this.mname <= 0 ){
      //   this.$q.notify({
      //     message: "Middle Name Required!",
      //     timeOut: 2500,
      //     color: "red",
      //     icon: "error"
      //   })
      // }
      else{
        this.$q.notify({
          message: `Hi ${this.fname} ${this.mname} ${this.lname}`,
          timeOut: 2500,
          color: "green",
          icon: "done"
        })
      }
    },
  },
  data () {
    return {
      fname: "",
      options: ["Single", "Married", "Divorced", "Widowed"],
      mname: "",
      lname: "",
      gender: null,
      date: "08/24/2019",
      cStatus: "",
      fullname: "",
      fulladdress: "",
      education: [
        {school: ""}
      ],
      num1: 1,
      num2: 3,
      isBool: true,
      isBool2: false,
      array1: [1,5],
      obj1: {
        num3: 18,
        bool: false,
        obj2: {
          samplevar: 2
        }
      }
    }
  }
}
</script>
