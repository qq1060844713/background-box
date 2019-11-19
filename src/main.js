import Vue from 'vue'
import App from './App.vue'
import BackgroundFrame from './lib'

Vue.config.productionTip = false

Vue.use(BackgroundFrame)

new Vue({
  render: h => h(App)
}).$mount('#app')
