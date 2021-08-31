<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import * as firebaseui from "firebaseui";
import firestore from "../firebase/firestore";
require("firebaseui/dist/firebaseui.css");

export default {
  mounted() {
    let uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: (currentUser) => {
                this.$store.dispatch('searchUserNameAndLogin',currentUser.user.uid);
                // console.log(currentUser.user.uid)
            }
            },
            signInSuccessUrl: "/",
            signInOptions: [firestore.firebase.auth.EmailAuthProvider.PROVIDER_ID],
    };
    let ui = new firebaseui.auth.AuthUI(firestore.firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
    console.log()
  },
};
</script>
