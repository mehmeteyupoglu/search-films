import Vue from "vue";
import Vuex from "vuex";
import { MovieService } from "../service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "",
    fullTitle: "",
    loadingState: false,
    movies: [],
  },
  mutations: {
    setTitle(state, payload) {
      // set title in vuex
      state.title = payload;
    },
    setFullTitle(state, payload) {
      state.fullTitle = payload;
    },
    setLoadingState(state, payload) {
      state.loadingState = payload;
    },
    setMovies(state, payload) {
      state.movies = payload;
    },
  },
  getters: {
    getTitle(state) {
      return state.title;
    },
    getLoadingState(state) {
      return state.loadingState;
    },
    getFullTitle(state) {
      return state.fullTitle;
    },
    getMovies(state) {
      return state.movies;
    },
  },
  actions: {
    async loadMovies({ commit, state }) {
      commit("setLoadingState", true);
      const _title = state.title;

      try {
        const data = await MovieService.getMovieList(_title);
        commit("setMovies", data);
      } catch (error) {
        console.log("error while fetching data");
      } finally {
        commit("setLoadingState", false);
      }
    },
  },

  /**
   * !!! No need for modules as all the state belongs to the same domain
   */
  modules: {},
});
