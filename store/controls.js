export const state = () => ({
  portfolioDrawer: false
});

export const mutations = {
  TOGGLE_PORTFOLIO_DRAWER(state) {
    state.portfolioDrawer = !state.portfolioDrawer;
  }
};
export const actions = {
  togglePortfolioDrawer({
    commit
  }) {
    commit('TOGGLE_PORTFOLIO_DRAWER');
  }
};
