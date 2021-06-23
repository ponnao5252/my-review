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
        favorite: false,
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
    ],
  },
  mutations: {
    addData(state, data) {
      // Home画面に追加
      if (state.cards.length == 0) {
        data.id = 1;
      } else {
        let max = state.cards[state.cards.length - 1].id;
        data.id = max + 1;
      }
      state.cards.push(data);
    },
    update(state, updateData) {
      let x = state.cards.find((card) => card.id == updateData.id);
      x.store = updateData.store;
      x.brand = updateData.brand;
      x.memo = updateData.memo;
    },
    changeFavoriteFlg(state, data) {
      let x = state.cards.find((card) => (card.id = data.id));
      x.favorite = !data.favorite;
    },
  },
  actions: {},
  modules: {},
});
