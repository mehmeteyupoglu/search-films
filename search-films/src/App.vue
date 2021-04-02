<template>
  <v-app>
    <navbar></navbar>

    <v-main>
      <home></home>
    </v-main>
  </v-app>
</template>

<script>
import { Navbar } from "./components/organisms";
import Home from "./views/Home";

export default {
  name: "App",

  components: {
    Navbar,
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
