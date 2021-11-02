<template>
  <div>
    <!-- 検索 -->
    <v-toolbar flat color="transparent" class="pt-4">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
      ></v-text-field>
    </v-toolbar>

    <!-- アイテム -->
    <v-card class="mx-auto" max-width="500" v-if="isShowCard">
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in newest"
            :key="card.id"
            :cols="12"
            v-ripple="{ center: true }"
          >
            <v-card>
              <v-img
                :src="card.src"
                class="white--text"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="150px"
                @click="toEdit(card.id)"
              >
                <v-card-title v-text="card.store"></v-card-title>
                <v-card-text v-text="card.brand"></v-card-text>
              </v-img>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon
                    @click="addFavorite(card.id)"
                    v-if="card.favorite"
                    color="red"
                    >mdi-heart</v-icon
                  >
                  <v-icon @click="addFavorite(card.id)" v-else
                    >mdi-heart</v-icon
                  >
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<style>
div a {
  text-decoration: none;
}
</style>

<script>
import firebase from "../firebase/firestore";
// const dataRef = firestore.collection('cards')

export default {
  data: () => ({
    search: "",
    obj: {},
  }),

  computed: {
    isShowCard() {
      return this.$store.getters.cardsLength != 0;
    },
    newest() {
      return this.$store.getters.cards;
    },
  },
  created() {
    if (this.$store.getters.userName !== undefined) {
      this.clear();
      {
        firebase.firebase.auth().onAuthStateChanged((user) => {
          if (this.$store.getters.loginFlg == 0) {
            this.$store.dispatch("reloadLogin", user.uid);
          } else {
            this.start();
          }
        });
      }
      this.$store.dispatch("loginFlgChange0");
    }
  },

  methods: {
    addFavorite(id) {
      this.$store.dispatch("addFavorite", id);
    },
    isFavoriteActive(id) {
      if (this.$store.getters.favoriteListLength == 0) {
        return false;
      } else {
        return this.$store.getters.favoriteList.includes(id);
      }
    },
    toEdit(id) {
      this.$router.push("/edit/" + id);
    },
    start() {
      this.$store.dispatch("startListner");
    },
    clear() {
      this.$store.dispatch("clearCards");
    },
  },
};
</script>
