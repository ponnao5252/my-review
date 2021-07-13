import Vue from "vue";
import Vuex from "vuex";
import firestore from '../firebase/firestore'
import router from "@/router/index";

const dataRef = firestore.collection('cards')

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      // {
      //   id: 1,
      //   store: 111,
      //   brand: "test",
      //   memo: "aaa",
      //   src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      // },
    ],
    favoriteList: [],
  },
  getters: {
    cardsLength: state => state.cards.length,
    cards: state => state.cards.sort((a,b) => {
      return a.id - b.id
    }),
    favoriteListLength: state => state.favoriteList.length,
    favoriteList: state => state.favoriteList
  },
  mutations: {
    addData(state, data) {
      dataRef.add(data)
    },
    // update(state, updateData) {
    // dataRef.get().then((snapshot) => {
    //     snapshot.forEach(doc => {
    //       if(doc.data().id == updateData.id) {
    //         dataRef.doc(doc.id).update({
    //           store: updateData.store,
    //           brand: updateData.brand,
    //           memo: updateData.memo
    //         })
    //       }
    //     })
    //   })
    // },
    addFavorite(state, id) {
      if (state.favoriteList.length == 0) {
        state.favoriteList.push(id);
      } else if (state.favoriteList.includes(id)) {
        state.favoriteList = state.favoriteList.filter(item => item !== id);
      } else {
        state.favoriteList.push(id);
      }
    },
    setState(state, data) {
      state.cards.push(data);
    },
    clearState(state) {
      state.cards = [];
    }
  },
  actions: {
    addFavorite(context, id) {
      context.commit("addFavorite", id);
    },
    addData(context, data) {
      if (this.state.cards.length == 0) {
        data.id = 1;
      } else {
        let max = this.state.cards[this.state.cards.length - 1].id;
        data.id = max + 1;
      }
      context.commit("addData", data);
    },
    update(context,upDateData) {
      dataRef.get().then((snapshot) => {
        snapshot.forEach(doc => {
          if(doc.data().id == upDateData.id) {
            dataRef.doc(doc.id).update({
              store: upDateData.store,
              brand: upDateData.brand,
              memo: upDateData.memo
            })
          }
        })
        router.push("/");
      })
    },
    clearState(context) {
      context.commit("clearState");
    },
    startListner({commit}) {
      dataRef.get().then((snapshot) => {
        snapshot.forEach(doc => {
          commit('setState', doc.data())
        })
      })
    }
  },
  modules: {},
});
