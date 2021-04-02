<template>
  <v-app-bar app color="grey darken-4" dark>
    <!-- Logo Group-->
    <logo :content="logoContent" />
  </v-app-bar>
</template>

<script>
import { Logo } from "../atoms";

export default {
  /**
   * @component
   * @example <navbar></navbar>
   */
  name: "Navbar",
  components: {
    Logo,
  },
  data: () => ({
    // content for logo
    logoContent: {
      title: "Film DB",
    },
  }),
};
</script>
