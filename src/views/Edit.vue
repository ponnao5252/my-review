<template>
  <div>
    <h1>編集</h1>

    <!-- 情報入力部 -->
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="購入店" v-model="cardStore"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="銘柄" dense v-model="cardBrand"></v-text-field>
        </v-col>

        <!-- レーティング -->
        <v-col cols="12" sm="6" md="3">
          総合評価
          <v-rating
            background-color="orange lighten-3"
            color="orange"
            size="30"
            hover
            half-increments
            half-icon="$ratingHalf"
            v-model="cardRate"
          ></v-rating>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-textarea
            label="メモ"
            counter
            maxlength="120"
            dense
            v-model="cardMemo"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>

    <!-- 登録ボタン -->
    <div class="my-2" style="text-align:center" @click="save">
      <v-btn color="orange" style="width: 100px">
        <span style="font-weight: bold;">更新</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "edit",
  data: () => ({
    cardStore: "",
    cardBrand: "",
    cardMemo: "",
    cardRate:""
  }),
  mounted() {
    let id = this.$route.params.id;
    let data = this.$store.state.cards.find((card) => card.id == id);
    this.cardStore = data.store;
    this.cardBrand = data.brand;
    this.cardMemo = data.memo;
    this.cardRate = data.rate
  },
  methods: {
    save() {
      this.$store.dispatch("update", {
        id: this.$route.params.id,
        store: this.cardStore,
        brand: this.cardBrand,
        memo: this.cardMemo,
        rate: this.cardRate,
      });
      // this.$router.push("/");
    },
  },
};
</script>
