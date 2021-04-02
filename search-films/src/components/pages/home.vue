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
    <v-row
      class="d-flex justify-center
    "
    >
      <movie-card
        v-for="movie in movies"
        :movie="movie"
        :key="movie.id"
      ></movie-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { AutoComplete } from "../atoms";
import { MovieCard } from "../organisms";
export default {
  /**
   * Harbors searching movie activity
   * @component
   * @example <home></home>
   */
  components: { AutoComplete, MovieCard },
  name: "Home",
  data: () => ({}),
  computed: {
    ...mapGetters({
      movies: "getMovies",
    }),
  },
};
</script>
