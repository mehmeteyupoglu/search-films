<template>
  <v-container>
    <snackbar :content="snackbarContent"></snackbar>
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
    <!-- if movies is undefined, length does not exist as well -->
    <v-row class="text-center align-items-center " v-if="movies && movies.length === 0">
      <v-col class="mt-5">
        <h3 class="button font-weight-bold">
          Nothing to show here...
        </h3>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <!-- as it has no content, self closing tags are cleaner -->
      <movie-card
        v-for="movie in movies"
        :movie="movie"
        :key="movie.id"
      />
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent, reactive, computed, toRefs, onMounted } from "@vue/composition-api"
import { AutoComplete } from "../atoms";
import { MovieCard } from "../organisms";
import { Snackbar } from "../molecules";

export default defineComponent({
  /**
   * Harbors searching movie activity
   * @component
   * @example <home></home>
   */
  components: { AutoComplete, MovieCard, Snackbar },
  name: "Home",
  setup(props, ctx) {
    const localState = reactive({
      snackbar: false
    })

    const movies = computed(() => ctx.root.$store.getters.getMovies)

    const snackbarContent = computed(() => ({
        model: localState.snackbar,
        text: "Don't forget to read",
        path:
          "https://github.com/mehmeteyupoglu/search-films/blob/main/README.md",
        strong: "documentation",
    }))

    /**
     * Changes the state of local snackbar asyncronously
     * @function
     */
    const snackbarTimeout = () => {
      setTimeout(() => {
        localState.snackbar = true;
      }, 2000);
      setTimeout(() => {
        localState.snackbar = false;
      }, 7000);
    }

    onMounted(() => {
      snackbarTimeout()
    })

    return { ...toRefs(localState), movies, snackbarContent }
  }
});
</script>
