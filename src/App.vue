<template>
  <div class="headpage" id="app">
    <headpage></headpage>
    <button type="button" class="btn btn-outline-success" v-on:click="onMachinesListClick">Look Machines parc's Status</button>
    <button type="button" href="#" class="btn btn-outline-success" v-on:click="onMapClick">Look Map Geolocalisation</button>
    <machineList></machineList>
    <machineMap></machineMap>
  </div>
</template>

<script>
export default {
    components: {},
    name: 'app',
  data () {
    return {

    }
  },
  methods: {
      onMachinesListClick: function() {
      alert('You are on the view maschine page')
},
      onMapClick: function() {
          alert('You are on the map localisation page')
      },
  }

}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

button {
  padding:30px;
  margin-top:70px;
  margin-right: 30px;
}
</style>
