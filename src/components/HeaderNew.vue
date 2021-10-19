<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app right>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>
              {{ name }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            v-for="item in selectedItems"
            :key="item.title"
            :to="item.to"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click.stop="dialog = true" v-if="isLogin">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- </v-navigation-drawer> -->
      <v-app-bar app color="#deb887">
        <v-btn icon>
          <v-icon dense @click="toHome">mdi-coffee</v-icon>
        </v-btn>
        <div v-ripple="{ center: true }">
          <v-toolbar-title
            style="font-size: 25px; width: 250px; border-radius: 30px"
            @click="toHome"
            >Coffee List</v-toolbar-title
          >
        </div>
        <v-spacer></v-spacer>

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <!-- ログアウトダイアログ -->
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">ログアウトしますか？</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              text
              @click="
                dialog = false;
                logout();
              "
            >
              ログアウト
            </v-btn>

            <v-btn color="green darken-1" text @click="dialog = false">
              キャンセル
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<style scoped>
.headline {
  font-size: 5px;
}
</style>

<script>
import firebase from "../firebase/firestore";
export default {
  name: "HeaderNew",
  data: () => ({
    drawer: null,
    selectedPattern: 1,
    items: [
      {
        title: "New Account",
        icon: "mdi-account-plus",
        to: "/signup",
        pattern: 1,
      },
      { title: "Login", icon: "mdi-login", to: "/signin", pattern: 1 },
      { title: "Home", icon: "mdi-home", to: "/", pattern: 2 },
      { title: "New", icon: "mdi-plus-thick", to: "/new", pattern: 2 },
      { title: "About", icon: "mdi-help-box", to: "/about" },
      { title: "Setting", icon: "mdi-cog-outline", to: "/set", pattern: 2 },
    ],
    userName: "test",
    dialog: false,
  }),
  computed: {
    selectedItems() {
      this.changePattern();
      return this.items.filter((item) => item.pattern === this.selectedPattern);
    },
    name() {
      return this.$store.getters.userName;
    },
    isLogin() {
      return this.selectedPattern == 2;
    },
  },
  methods: {
    toNew() {
      this.$router.push("new");
    },
    toHome() {
      this.$router.push("/", () => {});
    },
    changePattern() {
      if (this.$store.getters.userName !== undefined) {
        this.selectedPattern = 2;
      }
    },
    logout() {
      firebase.firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch("clearState");
          this.selectedPattern = 1;
          this.$router.push("/", () => {});
        });
    },
  },
};
</script>
