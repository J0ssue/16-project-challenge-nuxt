export const state = () => ({
    date: {
      day: true,
      month: true,
      year: true
    }
})

export const mutations  = {
  SET_DATE_FIELD(state, {field, data}) {
    state.date[field] = data
  }
}

export const actions = {
  setDateField({commit}, date) {
    commit('SET_DATE_FIELD', date)
  }
}