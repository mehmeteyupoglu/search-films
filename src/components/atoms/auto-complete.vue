<template>
  <div class="d-flex align-center">
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" lg="4" xl="4">
        <v-autocomplete
          v-model="fullTitle"
          :items="items"
          :loading="loading"
          outlined
          dense
          :search-input.sync="title"
          label="Search by movie"
          clearable
          no-data-text="No films to choose"
        ></v-autocomplete>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  /**
   * A @component that handles search activities
   * @example <auto-complete />
   */
  name: "AutoComplete",

  data: () => ({}),
  computed: {
    ...mapGetters({ loading: "getLoadingState", items: "getItems" }),
    title: {
      set(value) {
        this.$store.commit("setTitle", value);
      },
      get() {
        return this.$store.getters.getTitle;
      },
    },
    fullTitle: {
      set(value) {
        this.$store.commit("setFullTitle", value);
      },
      get() {
        return this.$store.getters.getFullTitle;
      },
    },
  },
  watch: {
    title() {
      // this makes sure that the data is not fetched when the title is an empty string
      if (this.title !== "" && !this.fullTitle) {
        this.$store.dispatch("loadMovies");
      }
    },
    fullTitle() {
      if (this.fullTitle !== "") {
        this.$store.dispatch("loadSelectedMovies");
      }
    },
  },
};
</script>
