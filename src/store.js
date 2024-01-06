import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: {},
      query: "",
      isLoading: false,
      error: null,
    };
  },

  mutations: {
    getTheUser(state, payload) {
      state.user = payload;
    },

    setTheQuery(state, payload) {
      state.query = payload.query;
    },
  },

  actions: {
    async getUser({ commit, state }) {
      try {
        state.isLoading = true;
        state.error = null;
        const res = await fetch(`https://api.github.com/users/${state.query}`);
        if (!res.ok) throw Error();
        const data = await res.json();
        commit("getTheUser", data);
      } catch {
        state.error = "User not found!";
        throw Error("User not found!");
      } finally {
        state.isLoading = false;
      }
    },

    setQuery(context, payload) {
      context.commit("setTheQuery", payload);
    },
  },

  getters: {
    user(state) {
      return state.user;
    },

    query(state) {
      return state.query;
    },

    isLoading(state) {
      return state.isLoading;
    },

    error(state) {
      return state.error;
    },
  },
});

export default store;
