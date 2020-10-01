import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

Vue.config.productionTip = false
axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vue-kadai-4-95d21/databases/(default)/documents"


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
