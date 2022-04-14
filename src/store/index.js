import Vue from "vue";
import Vuex from "vuex"

import listBlogs from '../mock/blog'

Vue.use(Vuex)
console.log('listBlogs', listBlogs)
const store = new Vuex.Store({

    state: {
        listBlogs,
        isLogin: false
    },
    getters: {

    },
    mutations: {
        SET_LOGIN(state, isLogin = false) {
            state.isLogin = isLogin;
        }

    },
    actions: {

        checkLogin({ commit }, { email, password }) {
            if (email === 'admin@gmail.com' && password === 'admin') {
                commit('SET_LOGIN', true);
                return true;
            } else {
                commit('SET_LOGIN', false);
                return false;
            }



        },
        logout({ commit }) {
            commit('SET_LOGIN', false);
        }
    }

});
export default store;