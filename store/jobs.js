export const state = () => ({
  jobs: [],
  activeTags: []
});

export const mutations = {
  ADD_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  ADD_TAG(state, tag) {
    state.activeTags.unshift(tag);
  },
  REMOVE_TAG(state, tag) {
    state.activeTags = state.activeTags.filter(item => item !== tag)
  }
};

export const actions = {
  setJobs({
    commit
  }, jobs) {
    commit('ADD_JOBS', jobs);
  },
  addTag({
    commit
  }, tag) {
    commit('ADD_TAG', tag);
  },
  removeTag({
    commit
  }, tag) {
    commit('REMOVE_TAG');
  }
}
