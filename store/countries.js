export const state = () => ({
  countries: [],
  theme: 'light'
});

export const mutations = {
  ADD_COUNTRIES(state, countries) {
    state.countries = countries;
  },
  TOGGLE_THEME(state) {
    state.theme === 'light' ? state.theme = 'dark' : state.theme = 'light';
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
  },
  toggleTheme({
    commit
  }) {
    commit('TOGGLE_THEME');
  }
};
