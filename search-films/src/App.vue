<template>
  <v-app>
    <navbar></navbar>

    <v-main> </v-main>
  </v-app>
</template>

<script>
import { Navbar } from "./components/organisms";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
