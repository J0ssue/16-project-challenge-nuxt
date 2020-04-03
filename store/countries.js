export const state = () => ({
  countries: [],
});

export const mutations = {
  ADD_COUNTRIES(state, countries) {
    state.countries = countries;
  }
};

export const actions = {
  async fetchCountries({
    commit
  }, countriesApi) {
    let {
      data
    } = await countriesApi.index();
    commit('ADD_COUNTRIES', data);
  },
  addCountries({
    commit
  }, countries) {
    commit('ADD_COUNTRIES', countries);
  }
};
