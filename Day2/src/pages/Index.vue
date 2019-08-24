
Save New Duplicate & Edit Just Text Twitter
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
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
      <q-input filled v-model="date" mask="##/##/####" label="Birthdate">
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
        class="col-xs-12 col-md-6 col-lg-4 q-pa-md"
      />
      <!-- Last Name<input class="col-xs-12 q-mx-md" type="text" placeholder="Last Name" v-model="fname" name="Last Name" id="">
      First Name<input class="col-xs-12 q-mx-md" type="text" placeholder="First Name" name="First Name" id="">
      Middle Name<input class="col-xs-12 q-mx-md" type="text" placeholder="Middle Name" name="Middle Name" id="">
      Birthday<input class="col-xs-12 q-mx-md" type="date" placeholder="Birthday" name="Birthday" id="">
      Full Address<textarea class="col-xs-12 q-mx-md" placeholder="Full Address" name="Full Address" id="" rows="4" cols="50" /> -->
      <div id="gender" class="col-xs-6">
        Gender
        <q-radio v-model="gender" val="Male" label="Male" />
        <q-radio v-model="gender" val="Female" label="Female" />
      </div>
      <div class="col-xs-12">
        Civil Status
        <q-select filled v-model="cStatus" :options="options" label="Filled" />
      </div>
      <div class="col-xs-12" v-if="cStatus == 'Married' ">
        Name of your husband/wife
        <q-input filled class="col-xs-12 col-md-6 col-lg-4 q-pa-md" v-model="fullname" standout="bg-red text-white" label="Name of your husband/wife" />
        <!-- <input type="text" v-model="fullname" name="" id=""> -->
      </div>
      <div class="col-xs-12" v-if="cStatus == 'Single' ">
        Mag mingle kana!
        <!-- <input type="text" v-model="fullname" name="" id=""> -->
      </div>
      <div class="col-xs-12" v-for="(edu, index) in education" :key="index">
        <!-- <input type="text" v-model="edu.school" name="" id=""> -->
        <q-input filled class="col-xs-12 col-md-6 col-lg-4 q-pa-md" v-model="edu.school" standout="bg-red text-white" label="Name of School" />
        <!-- <button @click="delSchool(index)">Delete School</button> -->
        <q-btn color="red" @click="delSchool(index)" label="Delete School" />
      </div>
        <q-btn color="primary" @click="addSchool" label="Add School" />
      <!-- <button @click="addSchool">Add new School</button> -->
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
    }
  },
  data () {
    return {
      fname: "",
      options: ["Single", "Married", "Divorced", "Widowed"],
      mname: "",
      lname: "",
      date: "08/24/2019",
      cStatus: "",
      fullname: "",
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
