import Vue from 'vue';
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

//import router from './router';
//import Example from './components/ExampleComponent';
import Example from './components/sobre';
//import store from './store';

require('./bootstrap');

const app = new Vue({
    el: '#app',

    components: {
        Example
    },

//    router,

//    store,
});
