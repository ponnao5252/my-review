import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 1,
        store: 111,
        brand: "test",
        memo: "aaa",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
    ],
    favoriteList: [],
  },
  getters: {
    cardsLength: state => state.cards.length,
    cards: state => state.cards,
    favoriteListLength: state => state.favoriteList.length,
    favoriteList: state => state.favoriteList
  },
  mutations: {
    addData(state, data) {
      // Home画面に追加

      state.cards.push(data);
    },
    update(state, updateData) {
      let x = state.cards.find((card) => card.id == updateData.id);
      x.store = updateData.store;
      x.brand = updateData.brand;
      x.memo = updateData.memo;
    },
    addFavorite(state, id) {
      if (state.favoriteList.length == 0) {
        state.favoriteList.push(id);
      } else if (state.favoriteList.includes(id)) {
        state.favoriteList = state.favoriteList.filter(item => item !== id);
      } else {
        state.favoriteList.push(id);
      }
    },
  },
  actions: {
    addFavorite(context, id) {
      context.commit("addFavorite", id);
    },
    addData(context, data) {
      context.commit("addData", data);
    },
    update(context, upDatedata) {
      context.commit("update", upDatedata);
    }
  },
  modules: {},
});
