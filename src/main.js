import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import './assets/style.css'
Vue.config.productionTip = false


new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})