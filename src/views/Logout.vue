<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            ログアウト
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">ログアウトしますか？</v-card-title>
          <!-- <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text> -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false"
              >キャンセル</v-btn
            >
            <v-btn color="green darken-1" text @click="dialog = false"
              >ログアウト</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
