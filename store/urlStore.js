export const state = () => ({
  urls: [],
});

export const mutations = {
  ADD_URL(state, url) {
    state.urls.unshift(url);
  },
  REMOVE_URL(state, url) {
    state.urls = state.urls.filter(item => item.hashid !== url.hashid)
  },
  COPY(state, id) {
    state.urls.forEach(url => {
      if (url.hashid === id) {
        url.copied = true;
      }
    });
  }
};

export const actions = {
  addUrl({
    commit
  }, url) {
    commit('ADD_URL', url);
  },
  removeUrl({
    commit
  }, url) {
    commit('REMOVE_URL', url);
  },
  copy({
    commit
  }, id) {
    commit('COPY', id);
  }
};
