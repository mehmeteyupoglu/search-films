<template>
  <v-app-bar app color="grey darken-4" dark>
    <!-- Logo Group-->
    <logo :content="logoContent" />
    <v-spacer></v-spacer>
    <btn-group :content="navbarBtnContent"></btn-group>
  </v-app-bar>
</template>

<script>
import { Logo } from "../atoms";
import { BtnGroup } from "../molecules";

export default {
  /**
   * @component
   * @example <navbar></navbar>
   */
  name: "Navbar",
  components: {
    Logo,
    BtnGroup,
  },
  data: () => ({
    // content for logo
    logoContent: {
      title: "Film DB",
    },
    navbarBtnContent: {
      path: "https://github.com/mehmeteyupoglu/search-films",
      title: "Check out the GitHub repo",
      icon: "mdi-open-in-new",
    },
  }),
};
</script>
