<template>
  <div>
    <h1>New</h1>

    <!-- 情報入力部 -->
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="購入店" v-model="store"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="銘柄" dense v-model="brand"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-textarea
            label="メモ"
            counter
            maxlength="120"
            dense
            v-model="memo"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>

    <!-- 登録ボタン -->
    <div class="my-2" style="text-align:center" @click="addData">
      <v-btn color="orange" style="width: 100px">
        <span style="font-weight: bold;">登録</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    store: "",
    brand: "",
    memo: "",
    imageList: [
      "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
    ],
  }),

  methods: {
    addData() {
      if (this.store === "") {
        alert("購入店を入力してください");
      } else {
        this.$store.dispatch("addData", {
          store: this.store,
          brand: this.brand,
          memo: this.memo,
          favorite: false,
          src: this.imageList[
            parseInt(Math.floor(Math.random() * this.imageList.length))
          ],
        });
        // Homeに戻る
        this.$router.push("/", () => {});
      }
    },
  },
};
</script>
