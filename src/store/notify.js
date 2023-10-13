import loadMore from "@/assets/js/loadMore";

export default {
  state: {
    messages: [],
    messagesMain: [],
  },
  mutations: {
    setMessage(state, payload) {
      state.messages = payload;
    },
    setMessageMain(state, payload) {
      state.messagesMain = payload;
    },
    loadMessages(state, payload) {
      state.messagesMain = [...state.messagesMain, ...payload];
      state.messages = [...state.messagesMain];
    },
  },
  actions: {
    setMessage({ commit }, payload) {
      commit("setMessage", payload);
    },
    setMessageMain({ commit }, payload) {
      commit("setMessageMain", payload);
    },
    loadMessages({ commit, state }) {
      const newMessages = loadMore(state.messages);
      commit("loadMessages", newMessages);
    },
  },
  getters: {
    getMessage(state) {
      return state.messages;
    },
    getMessageFilter(state) {
      return state.messages.filter((mes) => {
        return mes.main === false;
      });
    },
    getMessageMain(state) {
      return state.messagesMain;
    },
  },
};
