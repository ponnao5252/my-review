<template>
  <div>
    <h1>Edit</h1>

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
    <div class="my-2" style="text-align:center">
      <v-btn color="orange" style="width: 100px">
        <span style="font-weight: bold;">登録</span>
      </v-btn>
    </div>
  </div>
</template>

