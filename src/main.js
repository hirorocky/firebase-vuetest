import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyC9dyUZGeGVOzzVgzCXrhLDVAm_wdzhJ0k",
  authDomain: "vue-test-629a1.firebaseapp.com",
  databaseURL: "https://vue-test-629a1.firebaseio.com",
  projectId: "vue-test-629a1",
  storageBucket: "vue-test-629a1.appspot.com",
  messagingSenderId: "1026961178022",
  appId: "1:1026961178022:web:e6eda4fa2be417b7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
