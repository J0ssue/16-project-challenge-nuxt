export const state = () => ({
  jobs: [],
  activeTags: [],
  filteredJobs: []
});

export const mutations = {
  FILTER_JOBS(state) {
    let filteredJobs = [];
    let activeTags = state.activeTags;
    let jobs = state.jobs;

    if (activeTags.length === 0) {
      state.filteredJobs = jobs;
      return;
    }

    jobs.forEach(job => {
      for (let prop in job) {
        switch (typeof job[prop]) {
          case 'string':
            activeTags.forEach(tag => {
              if (tag.toLowerCase() === job[prop].toLowerCase()) {
                filteredJobs.unshift(job);
              }
            })
            break;
          case 'object':
            activeTags.forEach(tag => {
              job[prop].forEach(t => {
                if (tag.toLowerCase() === t.toLowerCase()) {
                  filteredJobs.unshift(job);
                }
              })
            })
        }
      }
    });
    // remove duplicates
    // for (let i = 0; i < filteredJobs.length; i++) {
    //   filteredJobs.filter(job => )
    // }
    state.filteredJobs = new Set(filteredJobs);
  },
  ADD_JOBS(state, jobs) {
    state.jobs = jobs;
    state.filteredJobs = jobs;
  },
  ADD_TAG(state, tag) {
    if (state.activeTags.includes(tag)) {
      return;
    } else {
      state.activeTags.unshift(tag);
    }
  },
  REMOVE_TAG(state, tag) {
    state.activeTags = state.activeTags.filter(item => item !== tag);
  },
  CLEAR_TAGS(state) {
    state.activeTags = [];
  }
};

export const actions = {
  setJobs({
    commit
  }, jobs) {
    commit('ADD_JOBS', jobs);
  },
  addTag({
    commit,
    dispatch
  }, tag) {
    commit('ADD_TAG', tag);
    commit('FILTER_JOBS');
  },
  removeTag({
    commit
  }, tag) {
    commit('REMOVE_TAG', tag);
    commit('FILTER_JOBS');
  },
  clearTags({
    commit
  }) {
    commit('CLEAR_TAGS');
    commit('FILTER_JOBS');
  }
}
