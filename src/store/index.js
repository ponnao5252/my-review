import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [],
  },
  mutations: {
    addData(state, data) {
      let max = state.cards[state.cards.length - 1]
      // Home画面に追加
      data.id = max + 1;
      state.cards.push(data);
    },
  },
  actions: {},
  modules: {},
});
