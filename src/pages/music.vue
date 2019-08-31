<template>
  <q-page padding>
    <!-- content -->
    <!-- {{music}} -->{{musics}}
    <h3>Popular Music</h3>
    <q-card class="bg-blue text-white" style="max-width: 700px;">
      <q-card-section>
        <q-list bordered separator>
        <q-item-label header class="text-white">List of Music</q-item-label>
          <q-item clickable @click="openMusic(music)" v-for="music in musics" :key="music._id" v-ripple>
            <q-item-section overline>{{music.artist}}</q-item-section>
            <q-item-section>{{music.song}}</q-item-section>
            <q-item-section caption>{{music.album}}</q-item-section>
            <q-item-section class="text-red" side>{{Number(music.played).toLocaleString()}}</q-item-section>
          </q-item>

        </q-list>
      </q-card-section>
    </q-card>
    <!-- button -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn unelevated rounded color="accent" @click="dialog = true" label="Add Music" size="30px" />
    </q-page-sticky>
    <!-- dialog -->
     <q-dialog v-model="dialog" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-white">
        <q-card-section>
          <div class="text-h6">Add Music</div>
        </q-card-section>

        <q-card-section>
          <q-input filled class="col-xs-12 col-md-6 col-lg-4 q-pa-md" v-model="singer" standout="bg-red text-white" label="Singer" />
          <q-input filled class="col-xs-12 col-md-6 col-lg-4 q-pa-md" v-model="album" standout="bg-red text-white" label="Album" />
          <q-input filled class="col-xs-12 col-md-6 col-lg-4 q-pa-md" v-model="song" standout="bg-red text-white" label="Song" />
          <q-input filled class="col-xs-12 col-md-6 col-lg-4 q-pa-md" v-model="played" type="number" standout="bg-red text-white" label="Number of Plays" />
        </q-card-section>

        <q-card-actions class="bg-white text-teal">
          <q-btn flat label="Cancel" @click="closeMusic" />
        </q-card-actions>
        <q-card-actions v-if="isAdd == false" class="bg-white text-teal">
          <q-btn flat label="Delete Music" @click="deleteMusic" />
        </q-card-actions>
        <q-card-actions class="bg-white text-teal">
          <q-btn flat :label="isAdd ? 'Add Music' : 'Update Music'"  @click="uploadMusic"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      dialog: false,
      isAdd: true,
      singer: null,
      album: null,
      song: null,
      played: null,
      uid: null,
      musics: [],
      realTMusic: []
    }
  },
  methods: {
    getMusic() {
      // dito ang mga logic
      this.$axios.get('http://localhost:3000/music').then(response => {
        // sa response callback function, nandito na yung mga records
        console.log('Data: ', response.data)
        this.musics = response.data
      })
    },
    uploadMusic () {
      if (this.isAdd == true) {
        this.addMusic()
      } else {
        this.updateMusic()
      }
    },
    addMusic (){
      // this.$axios.post('http://localhost:3000/music', {
      //   artist: this.singer,
      //   album: this.album,
      //   song: this.song,
      //   played: this.played
      // }).then(response => {
      //   console.log('response: ', response)
      //   this.closeMusic()
      //   this.getMusic()
      // })

      // socket.io
      // this.socket.emit('send_music', {
      //   artist: this.singer,
      //   album: this.album,
      //   song: this.song,
      //   played: this.played
      // })

      // firebase
      // firebase.firestore.collection('music').add()
      this.$db.collection('music').add({
        artist: this.singer,
        album: this.album,
        song: this.song,
        played: this.played
      }).then(() => {
        this.closeMusic()
      })
    },
    updateMusic () {
      // express node mongodb backend

      // this.$axios.put('http://localhost:3000/music/' + this.uid, {
      //   artist: this.singer,
      //   album: this.album,
      //   song: this.song,
      //   played: this.played
      // }).then(response => {
      //   console.log('response: ', response)
      //   this.closeMusic()
      //   this.getMusic()
      // })

      // firebase

      this.$db.collection('music').doc(this.uid).update({
        artist: this.singer,
        album: this.album,
        song: this.song,
        played: this.played
      }).then(() => {
        this.closeMusic()
      })
    },
    openMusic(data) {
      this.isAdd = false
      this.dialog = true
      // mongodb id = _id
      this.uid = data.id
      this.singer = data.artist
      this.album = data.album
      this.song = data.song
      this.played = data.played
    },
    closeMusic() {
      this.dialog = false
      this.isAdd = true
      this.uid = null
      this.singer = null
      this.album = null
      this.song = null
      this.played = null
    },
    deleteMusic() {
      // express node mongodb
      // this.$axios.delete('http://localhost:3000/music/' + this.uid).then(response => {
      //   console.log(response)
      //   this.closeMusic()
      //   this.getMusic()
      // })

      // firebase
      this.$db.collection('music').doc(this.uid).delete().then(() => {
        this.closeMusic()
      })
    }
  },
  mounted () {
    this.$bind('musics', this.$db.collection('music'))
    // from node backend
    // this.getMusic()
    // this.socket.on('getMusic', function(data) {
    //   this.realTMusic = data
    // })
  }
}
</script>

<style>
</style>
