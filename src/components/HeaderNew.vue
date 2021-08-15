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

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
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
      { title: "Logout", icon: "mdi-logout", to: "/signin", pattern: 2 },
    ],
    userName: "test",
  }),
  computed: {
    selectedItems() {
      this.changePattern()
      return this.items.filter((item) => item.pattern === this.selectedPattern);
    },
    name() {
      return this.$store.getters.userName;
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
  },
};
</script>
