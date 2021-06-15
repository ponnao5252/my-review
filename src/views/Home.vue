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
            v-for="card in $store.state.cards"
            :key="card.id"
            :cols="12"
            v-ripple="{ center: true }"
          >
            <v-card @click="toEdit">
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
                  <v-icon>mdi-heart</v-icon>
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

<script>
export default {
  data: () => ({
    search: "",
  }),

  computed: {
    isShowCard() {
     return this.$store.state.cards.length != 0
    }
  },

  methods: {
    toEdit() {
      this.$router.push("/edit", () => {});
    },
  },
};
</script>
