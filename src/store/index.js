import Vue from "vue";
import Vuex from "vuex";
import firebase from "../firebase/firestore";
import router from "@/router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [],
    favoriteList: [],
    loginUser: [],
    loginFlg: "",
  },
  getters: {
    cardsLength: (state) => state.cards.length,
    cards: (state) =>
      state.cards.sort((a, b) => {
        return a.id - b.id;
      }),
    favoriteListLength: (state) => state.favoriteList.length,
    favoriteList: (state) => state.favoriteList,
    userName: (state) => state.loginUser.userName,
  },
  mutations: {
    addData(state, data) {
      // firebase.dataRef.add(data);
      firebase.userRef
        .doc(state.loginUser.userUid)
        .collection("cards")
        .add(data);
    },
    addFavorite(state, id) {
      if (state.favoriteList.length == 0) {
        state.favoriteList.push(id);
      } else if (state.favoriteList.includes(id)) {
        state.favoriteList = state.favoriteList.filter((item) => item !== id);
      } else {
        state.favoriteList.push(id);
      }
    },
    setState(state, data) {
      state.cards.push(data);
    },
    clearState(state) {
      state.cards = [];
      state.favoriteList = [];
      state.loginUser = [];
    },
    clearCards(state) {
      state.cards = [];
    },
    addLoginUser(state, userData) {
      state.loginUser = userData;
      state.loginFlg = 1;
    },
    searchUserNameAndLogin(state, userData) {
      state.loginUser = userData;
    },
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
    update(context, upDateData) {
      firebase.userRef
        .doc(this.state.loginUser.userUid)
        .collection("cards")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.data().id == upDateData.id) {
              firebase.userRef
                .doc(this.state.loginUser.userUid)
                .collection("cards")
                .doc(doc.id)
                .update({
                  store: upDateData.store,
                  brand: upDateData.brand,
                  memo: upDateData.memo,
                });
            }
          });
          router.push("/");
        });
    },
        // ログアウトしたら全ての情報を空にする
    clearState(context) {
      context.commit("clearState");
    },

    clearCards(context) {
      context.commit("clearCards");
    },
    startListner({ commit }) {
      // ログインしているユーザーのデータを表示するようにする
      firebase.userRef
        .doc(this.state.loginUser.userUid)
        .collection("cards")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            commit("setState", doc.data());
          });
        });
    },
    addLoginUser(context, userData) {
      context.commit("addLoginUser", userData);
    },
    searchUserNameAndLogin(context, userUid) {
      console.log("d")
      firebase.userRef
        .doc(userUid)
        .get()
        // .then((userName) => {
        //   context.commit("addLoginUser", {
        //     userName: userName.data().user,
        //     userUid: userUid,
        //   });
        //   // this.dispatch("startListner");
        //   console.log("c")
        //   router.push("/")
        //   console.log("E")
        // },
        // 元々の方
        .then((userName) => {
          context.commit("addLoginUser", {
            userName: userName.data().user,
            userUid: userUid,
          });
          // this.dispatch("startListner");
          console.log("c")
          router.push("/")
          console.log("E")
        },
        );
    },
    reloadLogin(context, userUid) {
      firebase.userRef
        .doc(userUid)
        .get()
        .then((userName) => {
          context.commit("addLoginUser", {
            userName: userName.data().user,
            userUid: userUid,
          });
          this.dispatch("startListner");
          console.log("test")
          // router.push("/")
        });
    },
  },
  modules: {},
});
