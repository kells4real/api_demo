<template>
  <h2 v-if="isImage"><button class="button" @click="isImage = false">Hide Response</button></h2>
  <h2 v-else><button class="button" @click="getImage" style="background-color: #68be41">Show Response</button></h2>
  <h3  v-if="isLoading"><i class="fas fa-spinner fa-spin"></i>Loading...</h3>
  <img v-if="isImage" alt="Vue logo" style="max-width: 350px" :src="image">
  <h2 v-if="isImage">Response: {{ res }}</h2>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from "@/axios"
export default {
  name: 'App',
  data(){
    return {
      image: "",
      isImage: false,
      res: null,
      isLoading: false
    }
  },

  methods:{
    async getImage(){
      try {
        this.isLoading = true
        const response = await axios.get()
        this.image = response.data.awsImage
        this.res = response
        this.isImage = true
        this.isLoading = false
        console.log(response)
      }catch (e) {
        console.log(e.response.statusText)
        this.isLoading = false
      }
    }
  },

  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button {
  background-color: #ec914e; /* Green */
  border: none;
  color: white;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
