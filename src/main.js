import Vue from 'vue'
import App from './App.vue'
import HeadPage from './HeadPage.vue'
import MachineList from './MachineList.vue'
import MachineMap from './MachineMap.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


Vue.component("headpage", HeadPage)
Vue.component('machineList', MachineList)
Vue.component('MachineMap', MachineMap)


new Vue({
  el: '#app',
  render: h => h(App)
})
