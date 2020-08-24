import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { alert } from './alert.module'
import { account } from './account.module'

export default new Vuex.Store({
  modules: {
    alert,
    account
  }
});
