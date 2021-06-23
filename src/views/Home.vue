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
              <router-link :to="{ name: 'Edit', params: { id: card.id } }">
                <v-img
                  :src="card.src"
                  class="white--text"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="150px"
                >
                  <v-card-title v-text="card.store"></v-card-title>
                  <v-card-text v-text="card.brand"></v-card-text>
                </v-img>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon>
                    <v-icon @click="changeFavorite(card.id)">mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </router-link>
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
export default {
  data: () => ({
    search: "",
  }),

  computed: {
    isShowCard() {
      return this.$store.state.cards.length != 0;
    },
    newest() {
      return this.$store.state.cards;
    },

  },
  methods: {
    changeFavorite(id) {
      console.log(id);
    }
  }


};
</script>
