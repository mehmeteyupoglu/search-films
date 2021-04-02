<template>
  <v-container>
    <v-row class="text-center align-items-center ">
      <v-col class="mt-5">
        <h3 class="button font-weight-bold">
          Search for hundreds of movies...
        </h3>
      </v-col>
      <v-col cols="12">
        <auto-complete></auto-complete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { AutoComplete } from "../atoms";
export default {
  /**
   * Harbors searching movie activity
   * @component
   * @example <home></home>
   */
  components: { AutoComplete },
  name: "Home",
  data: () => ({}),
};
</script>
