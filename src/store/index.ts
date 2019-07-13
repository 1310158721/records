import Vue from 'vue';
import Vuex from 'vuex';
import global from '@/store/modules/global/index.ts'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    global
  }
});
