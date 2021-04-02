import Vue from "vue";
import Vuex from "vuex";
import { MovieService } from "../service";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "",
    fullTitle: "",
    loadingState: false,
    items: [],
    movies: [],
  },
  mutations: {
    setTitle(state, payload) {
      // set title in vuex
      state.title = payload;
    },
    setFullTitle(state, payload) {
      state.fullTitle = payload;
      state.title = "";
    },
    setLoadingState(state, payload) {
      state.loadingState = payload;
    },
    setMovies(state, payload) {
      state.movies = payload;
    },
    setItems(state, payload) {
      state.items = payload;
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
    getItems(state) {
      return state.items;
    },
  },
  actions: {
    async loadMovies({ commit, state }) {
      commit("setLoadingState", true);
      const _title = state.title;

      try {
        const data = await MovieService.getMovieList(_title);
        const movieTitleList = data.data.Search.map((item) => item.Title);

        commit("setItems", movieTitleList);
      } catch (error) {
        console.log("error while fetching data");
      } finally {
        commit("setLoadingState", false);
      }
    },

    async loadSelectedMovies({ commit, state }) {
      commit("setLoadingState", true);
      const _title = state.fullTitle;

      try {
        const data = await MovieService.getMovieList(_title);
        const selectedMovieList = data.data.Search;
        console.log(`selectedMovieList`, selectedMovieList);

        commit("setMovies", selectedMovieList);
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
  plugins: [createPersistedState()],
});
