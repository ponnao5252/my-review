<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import * as firebaseui from "firebaseui";
import firebase from "../firebase/firestore";
firebaseui = require("firebaseui-ja")
require("firebaseui/dist/firebaseui.css");

export default {
  mounted() {
    let uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: (currentUser) => {
                this.$store.dispatch('searchUserNameAndLogin',currentUser);
            }
            },
            // signInSuccessUrl: "/",
            signInOptions: [firebase.firebase.auth.EmailAuthProvider.PROVIDER_ID],
    };


    let ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>
